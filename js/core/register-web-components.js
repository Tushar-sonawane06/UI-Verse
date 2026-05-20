// Simple loader to import and register built web components
// Note: Use as a module in demo pages via `<script type="module" src="/js/core/register-web-components.js"></script>`

async function safeImport(specifier) {
	try {
		await import(specifier);
		console.log('imported', specifier);
		return true;
	} catch (err) {
		console.warn('failed to import', specifier, err.message);
		return false;
	}
}

(async function registerAll(){
	// Try local relative imports first (works when file served from server)
	const candidates = [
		'/components/WebComponents/uv-button.js',
		'/components/WebComponents/uv-modal.js',
		'/components/WebComponents/uv-tooltip.js',
		'/components/WebComponents/uv-language-switcher.js',
		'/components/WebComponents/uv-theme-switcher.js'
	];

	for (const spec of candidates) {
		await safeImport(spec);
	}

	// Attempt to upgrade any legacy wrappers
	try {
		const mod = await import('./component-registry.js');
		if (mod.default && typeof mod.default.upgradeExisting === 'function') {
			// DOM may not be ready - schedule a microtask
			window.requestAnimationFrame(() => mod.default.upgradeExisting());
		}
	} catch (e) {
		console.warn('component-registry import failed', e.message);
	}

	console.log('UI-Verse web components registration attempted');
})();
