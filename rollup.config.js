import typescript from 'rollup-plugin-typescript2';

/** @type {import('rollup').RollupOptions} */
const options = {
  input: './src/index.ts',
  plugins: [typescript()],
  output: [
    {
      format: 'cjs',
      file: './dist/index.js',
    },
    {
      format: 'esm',
      file: './dist/index.mjs',
    },
  ],
  external: [
    'html-escaper',
    'typedoc/dist/lib/converter',
    'typedoc/dist/lib/converter/components',
    'typedoc/dist/lib/output/events',
  ],
};

export default options;
