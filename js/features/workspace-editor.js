import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { yCollab } from 'y-codemirror.next';

const langMap = {
  html: html(),
  css: css(),
  js: javascript()
};

export function initEditor(container, ytext, awareness, language = 'html') {
  const state = EditorState.create({
    doc: ytext.toString(),
    extensions: [
      basicSetup,
      langMap[language] || [],
      yCollab(ytext, awareness)
    ]
  });

  return new EditorView({ state, parent: container });
}