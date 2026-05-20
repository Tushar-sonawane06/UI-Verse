export class UVModal extends HTMLElement{
  constructor(){
    super();
    const s = this.attachShadow({mode:'open'});
    s.innerHTML = `<div><slot></slot></div>`;
  }
}
customElements.define('uv-modal', UVModal);
