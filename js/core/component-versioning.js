(function (global) {
  function normalizeString(value) {
    return String(value || '').trim();
  }

  function normalizeVersion(version) {
    return normalizeString(version).replace(/^v/i, '');
  }

  function parseVersion(version) {
    const value = normalizeVersion(version);
    const match = value.match(/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?$/);
    if (!match) {
      return { raw: value, major: 0, minor: 0, patch: 0, prerelease: '', build: '', valid: false };
    }

    return {
      raw: value,
      major: Number(match[1]),
      minor: Number(match[2]),
      patch: Number(match[3]),
      prerelease: match[4] || '',
      build: match[5] || '',
      valid: true
    };
  }

  function compareVersions(left, right) {
    const a = parseVersion(left);
    const b = parseVersion(right);

    if (!a.valid && !b.valid) return normalizeVersion(left).localeCompare(normalizeVersion(right));
    if (!a.valid) return -1;
    if (!b.valid) return 1;

    if (a.major !== b.major) return a.major - b.major;
    if (a.minor !== b.minor) return a.minor - b.minor;
    if (a.patch !== b.patch) return a.patch - b.patch;
    if (a.prerelease && !b.prerelease) return -1;
    if (!a.prerelease && b.prerelease) return 1;
    return a.prerelease.localeCompare(b.prerelease);
  }

  function sortVersionsDesc(list) {
    return Array.from(new Set((list || []).map(normalizeVersion).filter(Boolean))).sort((a, b) => compareVersions(b, a));
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function collectAliases(component, doc) {
    return Array.from(new Set([
      component?.id,
      component?.title,
      ...(component?.aliases || []),
      ...(doc?.aliases || []),
      ...(doc?.metadata?.aliases || [])
    ].map((item) => normalizeString(item).toLowerCase()).filter(Boolean)));
  }

  function collectTags(component, doc) {
    return Array.from(new Set([
      ...(component?.tags || []),
      ...(doc?.tags || []),
      ...(doc?.metadata?.tags || [])
    ].map((item) => normalizeString(item).toLowerCase()).filter(Boolean)));
  }

  function collectVersions(component, doc) {
    const versions = [];
    if (component?.version) versions.push(component.version);
    if (doc?.version) versions.push(doc.version);
    toArray(component?.versions).forEach((item) => versions.push(item));
    toArray(doc?.versions).forEach((item) => versions.push(item));
    toArray(doc?.changelog).forEach((entry) => {
      if (entry && entry.version) versions.push(entry.version);
    });
    return sortVersionsDesc(versions);
  }

  function buildCatalog(items = [], docsItems = []) {
    const docsMap = new Map(toArray(docsItems).filter(Boolean).map((doc) => [String(doc.id || '').toLowerCase(), doc]));

    return toArray(items).filter(Boolean).map((component) => {
      const doc = docsMap.get(String(component.id || '').toLowerCase()) || null;
      const versions = collectVersions(component, doc);
      const latestVersion = versions[0] || normalizeVersion(component.version || doc?.version || '0.0.0');
      const currentVersion = normalizeVersion(component.version || doc?.version || latestVersion);
      const tags = collectTags(component, doc);
      const aliases = collectAliases(component, doc);

      return {
        id: component.id,
        title: normalizeString(doc?.title || component.title || component.id),
        path: component.path || '',
        description: normalizeString(doc?.description || component.description || ''),
        version: currentVersion,
        latestVersion,
        versions,
        tags,
        aliases,
        doc,
        metadata: component,
        isLatest: currentVersion === latestVersion,
        hasPage: Boolean(component.path),
        hasDocs: Boolean(doc || component.description || tags.length),
        searchText: [component.id, component.title, component.description, tags.join(' '), aliases.join(' '), currentVersion, latestVersion].join(' ').toLowerCase()
      };
    });
  }

  function findEntry(catalog, query) {
    const text = normalizeString(query).toLowerCase();
    if (!text) return null;

    return catalog.find((entry) => {
      const hay = [entry.id, entry.title].concat(entry.aliases || [], entry.tags || []).join(' ').toLowerCase();
      return hay === text || hay.includes(text) || text.includes(entry.id.toLowerCase());
    }) || null;
  }

  function parseQuery(query) {
    const text = normalizeString(query);
    const result = { query: text, id: '', version: '', alias: '' };

    const versionToken = text.match(/\b(?:version|v):([0-9A-Za-z.+-]+)/i);
    if (versionToken) result.version = normalizeVersion(versionToken[1]);

    const atMatch = text.match(/^(.+?)@([0-9A-Za-z.+-]+)$/);
    if (atMatch) {
      result.id = normalizeString(atMatch[1]);
      result.version = normalizeVersion(atMatch[2]);
    } else if (!result.id) {
      result.id = text.replace(/\b(?:version|v):[0-9A-Za-z.+-]+/i, '').trim();
    }

    result.alias = result.id.toLowerCase();
    return result;
  }

  function resolveVersion(entry, requestedVersion) {
    const versions = Array.isArray(entry.versions) ? entry.versions : [];
    const normalizedRequest = normalizeVersion(requestedVersion);

    if (!normalizedRequest || normalizedRequest === 'latest' || normalizedRequest === 'stable' || normalizedRequest === 'current') {
      return {
        version: entry.latestVersion || entry.version,
        status: entry.isLatest ? 'exact' : 'latest-stable',
        matched: true,
        fallbackUsed: false
      };
    }

    if (versions.includes(normalizedRequest)) {
      return {
        version: normalizedRequest,
        status: normalizedRequest === entry.latestVersion ? 'exact' : 'compatible',
        matched: true,
        fallbackUsed: false
      };
    }

    const parsedRequest = parseVersion(normalizedRequest);
    const sameMajor = versions.find((version) => parseVersion(version).major === parsedRequest.major);
    if (sameMajor) {
      return {
        version: sameMajor,
        status: 'compatible-fallback',
        matched: true,
        fallbackUsed: true
      };
    }

    return {
      version: entry.latestVersion || entry.version,
      status: 'latest-stable',
      matched: false,
      fallbackUsed: true
    };
  }

  function resolve(query, catalog = []) {
    const entries = Array.isArray(catalog) ? catalog : [];
    const parsed = typeof query === 'string' ? parseQuery(query) : {
      query: normalizeString(query?.query || query?.id || ''),
      id: normalizeString(query?.id || ''),
      version: normalizeVersion(query?.version || ''),
      alias: normalizeString(query?.alias || '').toLowerCase()
    };

    const lookup = parsed.id || parsed.alias || parsed.query;
    const entry = findEntry(entries, lookup);
    if (!entry) {
      return {
        found: false,
        query: parsed.query,
        requestedVersion: parsed.version,
        compatibility: { status: 'missing', fallbackUsed: false },
        path: '',
        version: ''
      };
    }

    const versionResolution = resolveVersion(entry, parsed.version);
    return {
      found: true,
      query: parsed.query,
      requestedVersion: parsed.version,
      path: entry.path,
      id: entry.id,
      title: entry.title,
      version: versionResolution.version,
      latestVersion: entry.latestVersion,
      aliases: entry.aliases,
      compatibility: {
        status: versionResolution.status,
        fallbackUsed: versionResolution.fallbackUsed,
        resolvedBy: parsed.version ? 'version' : 'alias'
      },
      entry
    };
  }

  function summarizeCatalog(catalog = []) {
    const entries = Array.isArray(catalog) ? catalog : [];
    const versions = new Set();
    entries.forEach((entry) => {
      (entry.versions || [entry.version]).forEach((version) => versions.add(version));
    });

    return {
      components: entries.length,
      versions: versions.size,
      latest: entries.filter((entry) => entry.isLatest).length
    };
  }

  const ComponentVersioning = {
    normalizeVersion,
    parseVersion,
    compareVersions,
    sortVersionsDesc,
    buildCatalog,
    resolve,
    summarizeCatalog
  };

  global.ComponentVersioning = ComponentVersioning;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentVersioning;
  }
})(typeof window !== 'undefined' ? window : globalThis);