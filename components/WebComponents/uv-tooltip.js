export class UVTooltip extends HTMLElement{
  constructor(){
    super();
    const s = this.attachShadow({mode:'open'});
    s.innerHTML = `<span><slot></slot></span>`;
  }
}
customElements.define('uv-tooltip', UVTooltip);
