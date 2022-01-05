import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/lib.js',
    output: [
      {
        name: 'jspsych-vviq',
        file: 'dist/jspsych-vviq.js',
        format: 'es',
      },
    ],
    external: [
      '@jspsych/plugin-survey-likert',
      '@jspsych/plugin-html-keyboard-response',
    ],
    plugins: [json()],
  },
];
