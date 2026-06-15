// =========================================================
// DUPLICATE COMPONENT SIMILARITY DETECTION
// Analyses component metadata to surface near-duplicate
// candidates for maintainer review.
// =========================================================

const SimilarityDetector = (() => {

  // ── Thresholds ────────────────────────────────────────
  const THRESHOLD_HIGH   = 0.75; // flagged as likely duplicate
  const THRESHOLD_MEDIUM = 0.50; // flagged as worth reviewing

  // ── Helpers ───────────────────────────────────────────

  /**
   * Tokenise a string into lowercase words, stripping
   * punctuation and common stop-words.
   */
  const STOP_WORDS = new Set([
    'a', 'an', 'the', 'and', 'or', 'for', 'of', 'in',
    'on', 'at', 'to', 'with', 'is', 'are', 'was', 'be',
    'component', 'components', 'ui', 'element', 'elements'
  ]);

  function tokenise(text) {
    if (!text) return [];
    return String(text)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 1 && !STOP_WORDS.has(t));
  }

  /**
   * Jaccard similarity between two token sets.
   * Returns 0–1.
   */
  function jaccard(setA, setB) {
    if (setA.size === 0 && setB.size === 0) return 1;
    if (setA.size === 0 || setB.size === 0) return 0;
    let intersection = 0;
    setA.forEach(t => { if (setB.has(t)) intersection++; });
    const union = setA.size + setB.size - intersection;
    return intersection / union;
  }

  /**
   * Normalised Levenshtein similarity between two strings.
   * Returns 0–1 (1 = identical).
   */
  function levenshteinSim(a, b) {
    a = String(a || '').toLowerCase();
    b = String(b || '').toLowerCase();
    if (a === b) return 1;
    const la = a.length, lb = b.length;
    if (la === 0 || lb === 0) return 0;
    const dp = Array.from({ length: la + 1 }, (_, i) =>
      Array.from({ length: lb + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
    );
    for (let i = 1; i <= la; i++) {
      for (let j = 1; j <= lb; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
    return 1 - dp[la][lb] / Math.max(la, lb);
  }

  // ── Per-component fingerprint ─────────────────────────

  function buildFingerprint(component) {
    const titleTokens  = new Set(tokenise(component.title || component.name || component.id));
    const descTokens   = new Set(tokenise(component.description || ''));
    const tagTokens    = new Set(
      (Array.isArray(component.tags) ? component.tags : [])
        .flatMap(t => tokenise(t))
    );
    const aliasTokens  = new Set(
      (Array.isArray(component.aliases) ? component.aliases : [])
        .flatMap(t => tokenise(t))
    );
    const category     = String(component.category || '').toLowerCase().trim();

    return { titleTokens, descTokens, tagTokens, aliasTokens, category, raw: component };
  }

  // ── Pairwise similarity score ─────────────────────────

  /**
   * Computes a weighted similarity score between two fingerprints.
   * Weights:
   *   Title similarity  — 40 %  (Levenshtein + Jaccard averaged)
   *   Tag overlap       — 30 %  (Jaccard)
   *   Description       — 20 %  (Jaccard)
   *   Category match    — 10 %  (exact match bonus)
   */
  function scorePair(fpA, fpB) {
    const titleLev  = levenshteinSim(
      fpA.raw.title || fpA.raw.id,
      fpB.raw.title || fpB.raw.id
    );
    const titleJac  = jaccard(fpA.titleTokens, fpB.titleTokens);
    const titleSim  = (titleLev + titleJac) / 2;

    const tagSim    = jaccard(fpA.tagTokens, fpB.tagTokens);
    const descSim   = jaccard(fpA.descTokens, fpB.descTokens);
    const catBonus  = (fpA.category && fpA.category === fpB.category) ? 1 : 0;

    const score =
      titleSim * 0.40 +
      tagSim   * 0.30 +
      descSim  * 0.20 +
      catBonus * 0.10;

    return Math.min(1, score);
  }

  // ── Reason builder ────────────────────────────────────

  function buildReasons(fpA, fpB, score) {
    const reasons = [];

    const titleLev = levenshteinSim(
      fpA.raw.title || fpA.raw.id,
      fpB.raw.title || fpB.raw.id
    );
    if (titleLev >= 0.70) reasons.push('Similar titles');

    const tagSim = jaccard(fpA.tagTokens, fpB.tagTokens);
    if (tagSim >= 0.50) reasons.push('Overlapping tags');

    const descSim = jaccard(fpA.descTokens, fpB.descTokens);
    if (descSim >= 0.40) reasons.push('Similar descriptions');

    if (fpA.category && fpA.category === fpB.category) {
      reasons.push('Same category (' + fpA.category + ')');
    }

    return reasons.length ? reasons : ['General metadata overlap'];
  }

  // ── Public API ────────────────────────────────────────

  /**
   * Analyse an array of component objects and return
   * duplicate/similarity candidates.
   *
   * @param  {Array}  components  — array from data/components.json
   *                               or ComponentIndex.getAll()
   * @param  {Object} options
   * @param  {number} options.threshold  — minimum score to include (default 0.50)
   * @param  {number} options.limit      — max pairs returned (default 50)
   * @returns {Array} pairs sorted by score descending
   *   Each pair: { a, b, score, severity, reasons }
   */
  function analyse(components, options) {
    const threshold = (options && options.threshold != null)
      ? options.threshold
      : THRESHOLD_MEDIUM;
    const limit = (options && options.limit != null)
      ? options.limit
      : 50;

    if (!Array.isArray(components) || components.length < 2) return [];

    const fingerprints = components.map(buildFingerprint);
    const pairs = [];

    for (let i = 0; i < fingerprints.length; i++) {
      for (let j = i + 1; j < fingerprints.length; j++) {
        const score = scorePair(fingerprints[i], fingerprints[j]);
        if (score < threshold) continue;

        const severity = score >= THRESHOLD_HIGH ? 'high' : 'medium';
        pairs.push({
          a:        fingerprints[i].raw,
          b:        fingerprints[j].raw,
          score:    Math.round(score * 100),   // 0-100 integer
          severity,
          reasons:  buildReasons(fingerprints[i], fingerprints[j], score)
        });
      }
    }

    pairs.sort((x, y) => y.score - x.score);
    return pairs.slice(0, limit);
  }

  /**
   * Convenience: run analysis using ComponentIndex if available,
   * falling back to fetching data/components.json directly.
   * Returns a Promise that resolves to the pairs array.
   */
  async function run(options) {
    let components;

    if (window.ComponentIndex) {
      try {
        await window.ComponentIndex.init();
        components = window.ComponentIndex.getAll();
      } catch (_) {
        components = null;
      }
    }

    if (!components || components.length === 0) {
      const res  = await fetch('data/components.json');
      components = await res.json();
    }

    return analyse(components, options);
  }

  /**
   * Format pairs as a human-readable plain-text report.
   * Useful for console output or a <pre> block.
   */
  function formatReport(pairs) {
    if (!pairs.length) return 'No duplicate candidates found above threshold.';

    const lines = [
      'UI-Verse — Duplicate Similarity Report',
      '========================================',
      ''
    ];

    pairs.forEach((pair, idx) => {
      lines.push(
        `#${idx + 1}  [${pair.severity.toUpperCase()}]  Score: ${pair.score}%`,
        `    A: ${pair.a.title || pair.a.id}  (${pair.a.path || pair.a.page || '—'})`,
        `    B: ${pair.b.title || pair.b.id}  (${pair.b.path || pair.b.page || '—'})`,
        `    Reasons: ${pair.reasons.join(' · ')}`,
        ''
      );
    });

    lines.push(`Total candidates: ${pairs.length}`);
    return lines.join('\n');
  }

  // ── Expose ────────────────────────────────────────────

  return {
    analyse,
    run,
    formatReport,
    THRESHOLD_HIGH,
    THRESHOLD_MEDIUM
  };

})();

window.SimilarityDetector = SimilarityDetector;