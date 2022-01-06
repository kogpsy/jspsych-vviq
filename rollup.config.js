import ts from 'rollup-plugin-ts';

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
    plugins: [ts()],
  },
];
