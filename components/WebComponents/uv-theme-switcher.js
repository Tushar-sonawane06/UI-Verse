export class UVThemeSwitcher extends HTMLElement{
  constructor(){
    super();
    const s = this.attachShadow({mode:'open'});
    s.innerHTML = `<button>Theme</button>`;
  }
}
customElements.define('uv-theme-switcher', UVThemeSwitcher);
