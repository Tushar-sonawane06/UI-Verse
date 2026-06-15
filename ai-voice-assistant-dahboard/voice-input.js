(function () {
  const DEFAULT_CONFIG = {
    endpoint: '/api/voice-assistant',
    locale: 'en-US',
    language: 'en',
    supportedLanguages: ['en', 'hi', 'ta', 'es'],
    languageLabels: {
      en: 'English',
      hi: 'Hindi',
      ta: 'Tamil',
      es: 'Spanish',
    },
    voiceHints: {
      en: 'en-US',
      hi: 'hi-IN',
      ta: 'ta-IN',
      es: 'es-ES',
    },
  };

  const INTENT_KEYWORDS = {
    GET_PRICE: ['price', 'rate', 'cost', 'mandi', 'today price', 'market price'],
    RECORD_EXPENSE: ['expense', 'spent', 'spend', 'buy', 'purchase', 'record expense'],
    WEATHER: ['weather', 'rain', 'temperature', 'forecast'],
    ALERT: ['alert', 'notify', 'remind', 'reminder'],
  };

  const TRANSLATIONS = {
    en: {
      listening: 'Listening...',
      idle: 'Tap the microphone and speak naturally.',
      fallback: 'I understood your request. Here is a local response.',
      noSpeech: 'No speech detected. Try again.',
      backendError: 'The assistant backend is unavailable. Using local processing.',
    },
    hi: {
      listening: 'सुन रहा हूँ...',
      idle: 'माइक्रोफोन दबाएँ और बोलें।',
      fallback: 'मैंने आपकी बात समझ ली। यहाँ उत्तर है।',
      noSpeech: 'कोई आवाज़ नहीं मिली। फिर से कोशिश करें।',
      backendError: 'बैकएंड उपलब्ध नहीं है। स्थानीय प्रोसेसिंग उपयोग की जा रही है।',
    },
    ta: {
      listening: 'கேட்டுக்கொள்கிறேன்...',
      idle: 'மைக்ரோஃபோனை தட்டி பேசுங்கள்.',
      fallback: 'உங்கள் கோரிக்கையை புரிந்துகொண்டேன். இதோ பதில்.',
      noSpeech: 'ஒலி கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.',
      backendError: 'பின்னணி சேவை கிடைக்கவில்லை. உள்ளக செயலாக்கம் பயன்படுத்தப்படுகிறது.',
    },
    es: {
      listening: 'Escuchando...',
      idle: 'Pulsa el micrófono y habla con naturalidad.',
      fallback: 'Entendí tu solicitud. Aquí tienes una respuesta local.',
      noSpeech: 'No se detectó voz. Inténtalo de nuevo.',
      backendError: 'El backend no está disponible. Se usará el procesamiento local.',
    },
  };

  const state = {
    isListening: false,
    recognition: null,
    locale: DEFAULT_CONFIG.locale,
    language: DEFAULT_CONFIG.language,
    transcript: '',
    intent: null,
    result: null,
  };

  function getConfig() {
    return Object.assign({}, DEFAULT_CONFIG, window.VoiceAssistantConfig || {});
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function getElements() {
    return {
      startBtn: $('[data-voice-action="start"]') || $('.primary-btn'),
      stopBtn: $('[data-voice-action="stop"]'),
      languageSelect: $('[data-voice-language]'),
      transcriptEl: $('[data-voice-transcript]'),
      responseEl: $('[data-voice-response]'),
      statusEl: $('[data-voice-status]'),
      intentEl: $('[data-voice-intent]'),
      sampleBtn: $('[data-voice-action="sample"]'),
    };
  }

  function setStatus(message) {
    const { statusEl } = getElements();
    if (statusEl) statusEl.textContent = message;
  }

  function setTranscript(text) {
    const { transcriptEl } = getElements();
    if (transcriptEl) transcriptEl.textContent = text || '—';
  }

  function setIntent(text) {
    const { intentEl } = getElements();
    if (intentEl) intentEl.textContent = text || '—';
  }

  function setResponse(text) {
    const { responseEl } = getElements();
    if (responseEl) responseEl.textContent = text || '—';
  }

  function speak(text) {
    if (!('speechSynthesis' in window) || !text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getConfig().voiceHints[state.language] || getConfig().locale;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  function getSpeechRecognition() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return null;

    if (!state.recognition) {
      const config = getConfig();
      state.recognition = new Recognition();
      state.recognition.lang = config.voiceHints[state.language] || config.locale;
      state.recognition.interimResults = false;
      state.recognition.continuous = false;
      state.recognition.maxAlternatives = 1;

      state.recognition.onstart = () => {
        state.isListening = true;
        setStatus(getTranslation('listening'));
      };

      state.recognition.onerror = (event) => {
        state.isListening = false;
        const message = event.error === 'no-speech' ? getTranslation('noSpeech') : `${getTranslation('backendError')} (${event.error})`;
        setStatus(message);
      };

      state.recognition.onend = () => {
        state.isListening = false;
        const current = getElements();
        if (current.startBtn) current.startBtn.setAttribute('aria-pressed', 'false');
        setStatus(getTranslation('idle'));
      };

      state.recognition.onresult = async (event) => {
        const transcript = event.results[0] && event.results[0][0] ? event.results[0][0].transcript.trim() : '';
        if (!transcript) return;
        state.transcript = transcript;
        setTranscript(transcript);

        const result = await processUtterance(transcript);
        state.result = result;
        state.intent = result.intent;
        setIntent(result.intent ? `${result.intent}${result.confidence ? ` (${Math.round(result.confidence * 100)}%)` : ''}` : '—');
        setResponse(result.response);
        speak(result.localizedResponse || result.response);
      };
    }

    return state.recognition;
  }

  function localTranslateToEnglish(text, language) {
    const lower = String(text || '').toLowerCase();
    if (language === 'hi') {
      return lower
        .replace(/आज/g, 'today')
        .replace(/टमाटर/g, 'tomato')
        .replace(/कीमत/g, 'price')
        .replace(/खर्च/g, 'expense')
        .replace(/पंजीकृत/g, 'record');
    }
    if (language === 'ta') {
      return lower
        .replace(/இன்று/g, 'today')
        .replace(/தக்காளி/g, 'tomato')
        .replace(/விலை/g, 'price')
        .replace(/செலவு/g, 'expense')
        .replace(/பதிவு/g, 'record');
    }
    if (language === 'es') {
      return lower;
    }
    return lower;
  }

  function detectIntent(englishText) {
    const normalized = String(englishText || '').toLowerCase();

    if (INTENT_KEYWORDS.GET_PRICE.some((keyword) => normalized.includes(keyword))) {
      const cropMatch = normalized.match(/(?:tomato|potato|onion|wheat|rice|cotton|maize|corn|banana|mango)/i);
      return { intent: 'GET_PRICE', crop: cropMatch ? cropMatch[0].toUpperCase() : 'GENERAL' };
    }

    if (INTENT_KEYWORDS.RECORD_EXPENSE.some((keyword) => normalized.includes(keyword))) {
      const amountMatch = normalized.match(/(?:₹|rs\.?|inr|\$)?\s?(\d+(?:\.\d+)?)/i);
      return { intent: 'RECORD_EXPENSE', amount: amountMatch ? amountMatch[1] : null };
    }

    if (INTENT_KEYWORDS.WEATHER.some((keyword) => normalized.includes(keyword))) {
      return { intent: 'WEATHER' };
    }

    if (INTENT_KEYWORDS.ALERT.some((keyword) => normalized.includes(keyword))) {
      return { intent: 'ALERT' };
    }

    return { intent: 'UNKNOWN' };
  }

  function buildLocalResponse(intentData, language, originalText) {
    const languageName = getConfig().languageLabels[language] || 'English';

    switch (intentData.intent) {
      case 'GET_PRICE':
        return {
          intent: 'GET_PRICE',
          confidence: 0.72,
          response: `Here is a sample ${intentData.crop} price update for today. Connect your market API to return live prices.`,
          localizedResponse: localizeResponse(`Here is a sample ${intentData.crop} price update for today. Connect your market API to return live prices.`, language),
          payload: { crop: intentData.crop, language: languageName },
        };
      case 'RECORD_EXPENSE':
        return {
          intent: 'RECORD_EXPENSE',
          confidence: 0.79,
          response: `Recorded expense${intentData.amount ? ` of ${intentData.amount}` : ''}. Connect your backend to persist this entry.`,
          localizedResponse: localizeResponse(`Recorded expense${intentData.amount ? ` of ${intentData.amount}` : ''}. Connect your backend to persist this entry.`, language),
          payload: { amount: intentData.amount, raw: originalText },
        };
      case 'WEATHER':
        return {
          intent: 'WEATHER',
          confidence: 0.67,
          response: 'Weather lookup is ready. Connect a weather API for live crop forecasts and rain alerts.',
          localizedResponse: localizeResponse('Weather lookup is ready. Connect a weather API for live crop forecasts and rain alerts.', language),
        };
      case 'ALERT':
        return {
          intent: 'ALERT',
          confidence: 0.64,
          response: 'Reminder saved locally. Hook this to your notification service for delivery alerts.',
          localizedResponse: localizeResponse('Reminder saved locally. Hook this to your notification service for delivery alerts.', language),
        };
      default:
        return {
          intent: 'UNKNOWN',
          confidence: 0.35,
          response: `I heard: "${originalText}". I can handle price checks, expense logging, weather and reminders.`,
          localizedResponse: localizeResponse(`I heard: "${originalText}". I can handle price checks, expense logging, weather and reminders.`, language),
        };
    }
  }

  function localizeResponse(text, language) {
    const translated = String(text || '');
    if (language === 'hi') {
      return translated
        .replace(/Here is a sample/g, 'यह एक नमूना')
        .replace(/Recorded expense/g, 'खर्च दर्ज किया गया')
        .replace(/Connect your backend to persist this entry\./g, 'इस प्रविष्टि को सहेजने के लिए अपने बैकएंड से जोड़ें।')
        .replace(/Weather lookup is ready\./g, 'मौसम जाँच तैयार है।')
        .replace(/Reminder saved locally\./g, 'रिमाइंडर स्थानीय रूप से सहेजा गया।')
        .replace(/I heard/g, 'मैंने सुना')
        .replace(/I can handle/g, 'मैं संभाल सकता हूँ');
    }

    if (language === 'ta') {
      return translated
        .replace(/Here is a sample/g, 'இது ஒரு மாதிரி')
        .replace(/Recorded expense/g, 'செலவு பதிவு செய்யப்பட்டது')
        .replace(/Connect your backend to persist this entry\./g, 'இந்த பதிவை சேமிக்க உங்கள் backend-ஐ இணைக்கவும்.')
        .replace(/Weather lookup is ready\./g, 'வானிலை தேடல் தயாராக உள்ளது.')
        .replace(/Reminder saved locally\./g, 'நினைவூட்டல் உள்ளகமாக சேமிக்கப்பட்டது.')
        .replace(/I heard/g, 'நான் கேட்டேன்')
        .replace(/I can handle/g, 'நான் கையாளலாம்');
    }

    if (language === 'es') {
      return translated
        .replace(/Here is a sample/g, 'Aquí tienes un ejemplo')
        .replace(/Recorded expense/g, 'Gasto registrado')
        .replace(/Connect your backend to persist this entry\./g, 'Conecta tu backend para guardar este registro.')
        .replace(/Weather lookup is ready\./g, 'La consulta del clima está lista.')
        .replace(/Reminder saved locally\./g, 'Recordatorio guardado localmente.')
        .replace(/I heard/g, 'Escuché')
        .replace(/I can handle/g, 'Puedo manejar');
    }

    return translated;
  }

  async function processUtterance(transcript) {
    const config = getConfig();
    const language = state.language;
    const englishText = language === 'en' ? transcript : localTranslateToEnglish(transcript, language);
    const intentData = detectIntent(englishText);

    try {
      const response = await fetch(config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transcript,
          englishText,
          language,
          locale: config.voiceHints[language] || config.locale,
          intentHint: intentData.intent,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return {
          intent: data.intent || intentData.intent,
          confidence: typeof data.confidence === 'number' ? data.confidence : 0.9,
          response: data.response || data.message || buildLocalResponse(intentData, language, transcript).response,
          localizedResponse: data.localizedResponse || data.response || data.message || buildLocalResponse(intentData, language, transcript).localizedResponse,
          payload: data.payload || {},
        };
      }
    } catch (error) {
      if (window.UIVERSE_DEBUG) {
        console.warn('[VoiceAssistant] backend unavailable, falling back to local intent handling', error);
      }
    }

    return buildLocalResponse(intentData, language, transcript);
  }

  function startListening() {
    const recognition = getSpeechRecognition();
    if (!recognition) {
      setStatus('Speech recognition is not supported in this browser.');
      return;
    }

    recognition.lang = getConfig().voiceHints[state.language] || getConfig().locale;
    if (state.isListening) {
      recognition.stop();
      return;
    }

    try {
      recognition.start();
      const { startBtn } = getElements();
      if (startBtn) startBtn.setAttribute('aria-pressed', 'true');
    } catch (error) {
      setStatus(`Unable to start voice capture: ${error.message}`);
    }
  }

  function stopListening() {
    const recognition = state.recognition;
    if (recognition && state.isListening) {
      recognition.stop();
    }
  }

  function bindUI() {
    const elements = getElements();
    const config = getConfig();

    if (elements.languageSelect) {
      elements.languageSelect.value = state.language;
      elements.languageSelect.addEventListener('change', (event) => {
        state.language = event.target.value;
        const hint = getConfig().voiceHints[state.language] || config.locale;
        if (state.recognition) state.recognition.lang = hint;
        setStatus(TRANSLATIONS[state.language]?.idle || TRANSLATIONS.en.idle);
      });
    }

    if (elements.startBtn) {
      elements.startBtn.addEventListener('click', startListening);
      elements.startBtn.setAttribute('aria-pressed', 'false');
    }

    if (elements.stopBtn) {
      elements.stopBtn.addEventListener('click', stopListening);
    }

    if (elements.sampleBtn) {
      elements.sampleBtn.addEventListener('click', async () => {
        const sampleText = state.language === 'hi'
          ? 'आज टमाटर की कीमत क्या है?'
          : state.language === 'ta'
            ? 'இன்று தக்காளி விலை என்ன?'
            : state.language === 'es'
              ? '¿Cuál es el precio del tomate hoy?'
              : 'What is the tomato price today?';
        state.transcript = sampleText;
        setTranscript(sampleText);
        const result = await processUtterance(sampleText);
        state.result = result;
        state.intent = result.intent;
        setIntent(result.intent || '—');
        setResponse(result.localizedResponse || result.response);
        speak(result.localizedResponse || result.response);
      });
    }
  }

  function getTranslation(key) {
    return TRANSLATIONS[state.language]?.[key] || TRANSLATIONS.en[key] || '';
  }

  function init() {
    const { startBtn, transcriptEl, responseEl, statusEl, intentEl } = getElements();
    if (!startBtn && !transcriptEl && !responseEl && !statusEl && !intentEl) return;

    state.language = (getElements().languageSelect && getElements().languageSelect.value) || getConfig().language || 'en';
    bindUI();

    setStatus(getTranslation('idle'));
    setTranscript('—');
    setIntent('—');
    setResponse('Ask for crop prices, log an expense, or try a voice sample.');
  }

  document.addEventListener('DOMContentLoaded', init);

  window.VoiceAssistant = {
    startListening,
    stopListening,
    processUtterance,
    getState: () => ({ ...state }),
  };
})();
