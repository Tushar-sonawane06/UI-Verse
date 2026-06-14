/**
 * Framework Export Transpiler
 * Converts plain HTML/CSS components into React, Vue, Svelte, and Angular code.
 * M1: AST-based transpiler (heuristic parsing) + prop inference
 */

const FrameworkTranspiler = (() => {
  'use strict';

  function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  }

  function toPascalCase(str) {
    const camel = toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function inferProps(html, css) {
    const props = [];
    const temp = document.createElement('div');
    temp.innerHTML = html;

    // Text props
    const walker = document.createTreeWalker(temp, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent.trim();
      if (text && text.length > 1 && text.length < 30 && !/^\d+$/.test(text)) {
        textNodes.push(text);
      }
    }
    if (textNodes.length > 0) {
      props.push({ name: 'text', type: 'string', default: textNodes[0], label: 'Text' });
    }

    // Color props
    const colorMatches = css.match(/#[0-9a-f]{3,8}|rgb[a]?\([^)]+\)|hsl[a]?\([^)]+\)/gi) || [];
    const uniqueColors = [...new Set(colorMatches)].slice(0, 3);
    uniqueColors.forEach((color, i) => {
      props.push({
        name: i === 0 ? 'color' : `color${i + 1}`,
        type: 'color',
        default: color,
        label: i === 0 ? 'Color' : `Color ${i + 1}`
      });
    });

    // Size props
    const sizeMatches = css.match(/\b(?:width|height|padding|font-size|border-radius)\s*:\s*([\d.]+(?:px|rem|em|%))/gi) || [];
    if (sizeMatches.length > 0) {
      const val = sizeMatches[0].match(/([\d.]+(?:px|rem|em|%))/)[1];
      props.push({
        name: 'size',
        type: 'number',
        default: parseFloat(val),
        unit: val.replace(/[\d.]+/, ''),
        label: 'Size'
      });
    }

    return props;
  }

  function reactifyHtml(html, props) {
    let result = html;
    result = result.replace(/\bclass=/g, 'className=');
    result = result.replace(/\bfor=/g, 'htmlFor=');
    result = result.replace(/\bonclick=/g, 'onClick=');
    result = result.replace(/\bonchange=/g, 'onChange=');
    result = result.replace(/\boninput=/g, 'onInput=');
    result = result.replace(/\bonfocus=/g, 'onFocus=');
    result = result.replace(/\bonblur=/g, 'onBlur=');
    result = result.replace(/\bonkeydown=/g, 'onKeyDown=');
    result = result.replace(/\bonkeyup=/g, 'onKeyUp=');
    result = result.replace(/\bonmousedown=/g, 'onMouseDown=');
    result = result.replace(/\bonmouseup=/g, 'onMouseUp=');

    result = result.replace(/style="([^"]*)"/g, (match, styles) => {
      const pairs = styles.split(';').filter(Boolean);
      const obj = pairs.map(p => {
        const [k, v] = p.split(':').map(s => s.trim());
        if (!k || !v) return null;
        const key = toCamelCase(k);
        const val = /^\d+$/.test(v) ? v : `'${v}'`;
        return `${key}: ${val}`;
      }).filter(Boolean).join(', ');
      return `style={{${obj}}}`;
    });

    props.forEach(prop => {
      if (prop.type === 'string' || prop.type === 'text') {
        result = result.replace(
          new RegExp(`>${escapeRegExp(prop.default)}<<`, 'g'),
          `>{${prop.name}}<<`
        );
      }
    });

    result = result.replace(/<(input|br|hr|img|meta|link|area|base|col|embed|param|source|track|wbr)([^>]*)>/gi, '<$1$2 />');
    return result;
  }

  function generateReact(html, css, componentName, props) {
    const tsInterface = props.map(p => {
      let tsType = 'string';
      if (p.type === 'number') tsType = 'number';
      if (p.type === 'boolean') tsType = 'boolean';
      return `  ${p.name}?: ${tsType};`;
    }).join('\n');

    const propDefaults = props.map(p => {
      let val = `'${p.default}'`;
      if (p.type === 'number') val = p.default;
      if (p.type === 'boolean') val = String(p.default);
      return `    ${p.name}: ${val},`;
    }).join('\n');

    const propDestructuring = props.map(p => p.name).join(', ');
    const reactHtml = reactifyHtml(html, props);

    return `import React from 'react';
import './${componentName}.module.css';

export interface ${componentName}Props {
${tsInterface}
  onClick?: () => void;
}

export const ${componentName}: React.FC<<${componentName}Props> = ({
${propDefaults}
  onClick
}) => {
  return (
    ${reactHtml.trim()}
  );
};`;
  }

  function generateVue(html, css, componentName, props) {
    const propDefs = props.map(p => {
      let defaultVal = `'${p.default}'`;
      if (p.type === 'number') defaultVal = p.default;
      if (p.type === 'boolean') defaultVal = String(p.default);
      return `  ${p.name}: { type: ${p.type === 'number' ? 'Number' : p.type === 'boolean' ? 'Boolean' : 'String'}, default: ${defaultVal} }`;
    }).join(',\n');

    let vueHtml = html
      .replace(/\bonclick=/g, '@click=')
      .replace(/\bonchange=/g, '@change=')
      .replace(/\boninput=/g, '@input=');

    props.forEach(prop => {
      if (prop.type === 'string' || prop.type === 'text') {
        vueHtml = vueHtml.replace(
          new RegExp(`>${escapeRegExp(prop.default)}<<`, 'g'),
          `>{{ ${prop.name} }}<<`
        );
      }
    });

    return `<template>
  ${vueHtml.trim()}
</template>

<script setup>
defineProps({
${propDefs}
});

const emit = defineEmits(['click']);
</script>

<style scoped>
${css}
</style>`;
  }

  function generateSvelte(html, css, componentName, props) {
    const propDefs = props.map(p => {
      let defaultVal = `'${p.default}'`;
      if (p.type === 'number') defaultVal = p.default;
      if (p.type === 'boolean') defaultVal = String(p.default);
      return `  export let ${p.name} = ${defaultVal};`;
    }).join('\n');

    let svelteHtml = html
      .replace(/\bonclick=/g, 'on:click=')
      .replace(/\bonchange=/g, 'on:change=')
      .replace(/\boninput=/g, 'on:input=');

    props.forEach(prop => {
      if (prop.type === 'string' || prop.type === 'text') {
        svelteHtml = svelteHtml.replace(
          new RegExp(`>${escapeRegExp(prop.default)}<<`, 'g'),
          `>{${prop.name}}<<`
        );
      }
    });

    return `<script>
${propDefs}
</script>

${svelteHtml.trim()}

<style>
${css}
</style>`;
  }

  function generateAngular(html, css, componentName, props) {
    const inputProps = props.map(p => `  @Input() ${p.name} = '${p.default}';`).join('\n');

    let angularTemplate = html
      .replace(/\bonclick=/g, '(click)=')
      .replace(/\bonchange=/g, '(change)=')
      .replace(/\boninput=/g, '(input)=');

    props.forEach(prop => {
      if (prop.type === 'string' || prop.type === 'text') {
        angularTemplate = angularTemplate.replace(
          new RegExp(`>${escapeRegExp(prop.default)}<<`, 'g'),
          `>{{ ${prop.name} }}<<`
        );
      }
    });

    return `import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-${toCamelCase(componentName)}',
  template: \`
    ${angularTemplate.trim()}
  \`,
  styles: [\`
    ${css}
  \`]
})
export class ${componentName}Component {
${inputProps}
  @Output() onClick = new EventEmitter<Event>();
}`;
  }

  function transpile(html, css, framework, componentName = 'UiverseComponent') {
    const name = toPascalCase(componentName);
    const props = inferProps(html, css);

    switch (framework) {
      case 'react':
        return { code: generateReact(html, css, name, props), props, framework, componentName: name };
      case 'vue':
        return { code: generateVue(html, css, name, props), props, framework, componentName: name };
      case 'svelte':
        return { code: generateSvelte(html, css, name, props), props, framework, componentName: name };
      case 'angular':
        return { code: generateAngular(html, css, name, props), props, framework, componentName: name };
      default:
        throw new Error(`Unknown framework: ${framework}`);
    }
  }

  return {
    transpile,
    inferProps,
    generateReact,
    generateVue,
    generateSvelte,
    generateAngular,
    toPascalCase,
    toCamelCase
  };
})();

if (typeof window !== 'undefined') window.FrameworkTranspiler = FrameworkTranspiler;
if (typeof module !== 'undefined' && module.exports) module.exports = FrameworkTranspiler;