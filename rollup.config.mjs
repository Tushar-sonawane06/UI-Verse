import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const commonPlugins = [
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json', declaration: false })
];

export default [
  // Main bundle
  {
    input: 'src/index.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
      { file: 'dist/index.js', format: 'esm', sourcemap: true },
      { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true, exports: 'named' },
      { file: 'dist/index.umd.js', format: 'umd', name: 'UIVerse', sourcemap: true, exports: 'named' }
    ]
  },
  // Design Tokens
  {
    input: 'src/design-tokens.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/design-tokens.js', format: 'esm', sourcemap: true },
      { file: 'dist/design-tokens.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-button
  {
    input: 'src/components/uv-button.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-button.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-button.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-modal
  {
    input: 'src/components/uv-modal.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-modal.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-modal.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-tooltip
  {
    input: 'src/components/uv-tooltip.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-tooltip.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-tooltip.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-language-switcher
  {
    input: 'src/components/uv-language-switcher.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-language-switcher.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-language-switcher.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-theme-switcher
  {
    input: 'src/components/uv-theme-switcher.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-theme-switcher.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-theme-switcher.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-dropdown
  {
    input: 'src/components/uv-dropdown.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-dropdown.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-dropdown.mjs', format: 'esm', sourcemap: true }
    ]
  },
  // uv-tabs
  {
    input: 'src/components/uv-tabs.ts',
    plugins: commonPlugins,
    output: [
      { file: 'dist/components/uv-tabs.js', format: 'esm', sourcemap: true },
      { file: 'dist/components/uv-tabs.mjs', format: 'esm', sourcemap: true }
    ]
  }
];
