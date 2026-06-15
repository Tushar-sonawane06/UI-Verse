const COLORS = [
  '#eb6835', '#6c5ce7', '#00b894', '#fdcb6e',
  '#d63031', '#74b9ff', '#a29bfe', '#55efc4'
];

const ADJECTIVES = ['Happy', 'Clever', 'Bright', 'Swift', 'Calm', 'Brave', 'Kind'];
const NOUNS = ['Fox', 'Owl', 'Bear', 'Wolf', 'Hawk', 'Deer', 'Lynx'];

export class Presence {
  constructor(provider, container) {
    this.provider = provider;
    this.container = container;
    this.awareness = provider.awareness;

    this.localState = {
      user: {
        name: this._getUserName(),
        color: this._getUserColor()
      }
    };

    this.awareness.setLocalState(this.localState);
    this.awareness.on('change', () => this._render());
    this._render();
  }

  _getUserName() {
    let name = sessionStorage.getItem('collab-name');
    if (!name) {
      name = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)] + ' ' +
             NOUNS[Math.floor(Math.random() * NOUNS.length)];
      sessionStorage.setItem('collab-name', name);
    }
    return name;
  }

  _getUserColor() {
    let color = sessionStorage.getItem('collab-color');
    if (!color) {
      color = COLORS[Math.floor(Math.random() * COLORS.length)];
      sessionStorage.setItem('collab-color', color);
    }
    return color;
  }

  _render() {
    const states = Array.from(this.awareness.getStates().values());
    const users = states
      .filter((s) => s && s.user)
      .map((s) => `<div class="presence-user" style="--user-color:${s.user.color}">
        <span class="presence-avatar" style="background:${s.user.color}">${s.user.name.charAt(0)}</span>
        <span class="presence-name">${s.user.name}</span>
      </div>`)
      .join('');

    this.container.innerHTML = users || '<span class="presence-empty">No one else here</span>';
  }
}