export class UVButton extends HTMLElement {
  constructor(){
    super();
    const s = this.attachShadow({mode:'open'});
    s.innerHTML = `<button><slot></slot></button>`;
  }
}
customElements.define('uv-button', UVButton);
