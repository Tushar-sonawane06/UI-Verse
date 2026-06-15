document.addEventListener('DOMContentLoaded', () => {
  const colorInput = document.getElementById('color-input');
  const colorPreview = document.getElementById('color-preview');
  const hexInput = document.getElementById('hex-input');
  const rgbInput = document.getElementById('rgb-input');
  const hslInput = document.getElementById('hsl-input');

  function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  function updateColors(hexValue) {
    // Update preview and color input
    colorPreview.style.backgroundColor = hexValue;
    if(colorInput.value !== hexValue) colorInput.value = hexValue;
    if(hexInput.value !== hexValue) hexInput.value = hexValue;

    // Calculate RGB
    const rgb = hexToRgb(hexValue);
    rgbInput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    // Calculate HSL
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    hslInput.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }

  // Event Listeners
  colorInput.addEventListener('input', (e) => {
    updateColors(e.target.value);
  });

  hexInput.addEventListener('change', (e) => {
    let hex = e.target.value;
    if (!hex.startsWith('#')) hex = '#' + hex;
    
    // Validate hex
    if (/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
      updateColors(hex);
    } else {
      // Revert on invalid
      e.target.value = colorInput.value;
    }
  });

  // Copy functionality
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const inputId = btn.id.replace('copy-', '') + '-input';
      const input = document.getElementById(inputId);
      
      navigator.clipboard.writeText(input.value).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 1500);
      });
    });
  });

  // Initial setup
  updateColors(colorInput.value);
});
