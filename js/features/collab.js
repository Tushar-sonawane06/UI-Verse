import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { IndexeddbPersistence } from 'y-indexeddb';

const SIGNALING_SERVERS = [
  'wss://signaling.yjs.dev',
  'wss://y-webrtc-signaling-eu.herokuapp.com',
  'wss://y-webrtc-signaling-us.herokuapp.com'
];

export class Collab {
  constructor(roomId, { html = '', css = '', js = '' } = {}) {
    this.roomId = roomId;
    this.doc = new Y.Doc();

    this.htmlText = this.doc.getText('html');
    this.cssText = this.doc.getText('css');
    this.jsText = this.doc.getText('js');
    this.meta = this.doc.getMap('meta');

    if (html && this.htmlText.length === 0) this.htmlText.insert(0, html);
    if (css && this.cssText.length === 0) this.cssText.insert(0, css);
    if (js && this.jsText.length === 0) this.jsText.insert(0, js);

    this.meta.set('roomId', roomId);
    this.meta.set('createdAt', new Date().toISOString());

    this.provider = new WebrtcProvider(roomId, this.doc, {
      signaling: SIGNALING_SERVERS,
      maxConns: 50
    });

    this.persistence = new IndexeddbPersistence(roomId, this.doc);

    this.provider.on('status', (event) => {
      console.info('[Collab] WebRTC status:', event.status);
    });

    this.persistence.on('synced', () => {
      console.info('[Collab] IndexedDB synced');
    });
  }

  get awareness() {
    return this.provider.awareness;
  }

  destroy() {
    this.provider.destroy();
    this.persistence.destroy();
    this.doc.destroy();
  }
}