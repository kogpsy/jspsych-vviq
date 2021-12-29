import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'jspsych-vviq',
        file: 'dist/jspsych-vviq.js',
        format: 'es',
      },
    ],
    plugins: [json()],
  },
];
