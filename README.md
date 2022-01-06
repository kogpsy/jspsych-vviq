# jspsych-vviq

Items of the VVIQ questionnaire for experiments that run with jsPsych 7.

[![npm version](https://badge.fury.io/js/@kogpsy%2Fjspsych-vviq.svg)](https://badge.fury.io/js/@kogpsy%2Fjspsych-vviq)

## VVIQ

The VVIQ2 (Marks, 1995; as proposed by McKelvie, 1995) is the successor of the VVIQ (Marks, 1973) with some adjustments. Most importantly, 16 more items (in 4 content-related item blocks) were added, and the scale has been reversed, so that lower numbers on the response scale correspond to lower subjective vividness. The tool aims to measure vividness of mental images.

There are, as stated above, different versions of the VVIQ. In addition, some researchers use the VVIQ version 1, but with reversed scale, others use the VVIQ version 2, but only 16 items of it, so that the lines around the specific versions of the questionnaire become quite blurry.

This package aims to provide the VVIQ2, including all 8 item blocks, but gives you the option to just use certain ones of them. The instructions have been adapted to better fit the web-based questionnaire format. Besides, since single item blocks can be used, the word 'finally' was removed from the instruction of the last item block of the questionnaire. In addition, the whole tool has been translated into german to take the first step towards a multilingual VVIQ.

## How to use in your project

Install as a dependency:

```console
$ yarn add @kogpsy/jspsych-vviq
```

Then import the **generator function**, let it create the VVIQ timeline and add it to your main timeline:

```javascript
import { generateVviqTimeline } from '@kogpsy/jspsych-vviq';

const vviq = generateVviqTimeline();

timeline.push(vviq);
```

By default, the full questionnaire, including the main instruction is generated in english. To adjust this behavior, see the next paragraph.

**Note:** You need jsPsych, as well as the [HTMLKeyboardResponsePlugin][1] and the [SurveyLikertPlugin][2] to be installed in your project. These are peer dependencies of `@kogpsy/jspsych-vviq`. I furthermore recommend to use [`jspsych-builder`][3] to develop your experiments.

### Configuration options

The generator function takes three arguments:

- A `string` specifying the language of the questionnaire items (possible options: `'english'`, `'german'`).
- An `Array` specifying which item blocks to include (possible options: _an array containing numbers from 1 to 8, like_ `[1,3,4,8]`).
- A `boolean` specifying whether the main instruction should be included (possible options: `true`, `false`).

### Styling

You can apply your own css styles to the elements.

- If there are paragraphs, they are usually created using `<p>` tags (in general: check your browser devtools to learn about HTML structure).
- The main instruction is wrapped in a div with the css class `vviq-instruction-main`.
- The block instructions are wrapped in a div with the css class `vviq-instruction-block`.
- The single question instructions are wrapped in a div with the css class `vviq-question`.
- The rating scale labels are wrapped in a div with the css class `vviq-scalelabel`.

## Development

First, to be able to start development, install required dependencies:

```console
$ yarn install
```

Then, to build a bundled version of your code, execute (your bundle will be created in the `build` directory):

```console
$ yarn run build
```

### Add languages

To add more languages, two steps are necessary:

1. Create a new _strings_ file under `src/`. Make sure the object structure is exactly the same as in the german and english file. There is a TypeScript type called `Language` in `src/types.ts` which helps you with this process.
2. Adjust the `generateVviqTimeline()` functin in `src/generateVviqTimeline.js` to respect the newly added language.

[1]: https://www.jspsych.org/latest/plugins/html-keyboard-response/
[2]: https://www.jspsych.org/latest/plugins/survey-likert/
[3]: https://github.com/bjoluc/jspsych-builder
