# jspsych-vviq

Items of the VVIQ questionnaire for experiments that run with jsPsych 7.

At the moment there are 16 of the total of 32 items available. The rest of them will be added soon.

## VVIQ

The VVIQ2 (Marks, 1995; as proposed by McKelvie, 1995) is the successor of the VVIQ (Marks, 1973) with some adjustments. Most importantly, 16 more items are added, and the scale has been reversed, so that lower numbers correspond to lower vividness. The tool aims to measure vividness of mental images.

There are, as stated above, different versions of the VVIQ. In addition, some researchers use the VVIQ version 1, but with reversed scale, some use the VVIQ version 2, but only 16 items of it. This package aims to provide the VVIQ2, but gives you the option to just use certain item blocks. The instructions have been adapted to better fit the web-based questionnaire format.

## How to use in your project

Install as a dependency:

```console
$ yarn add @kogpsy/jspsych-vviq
```

Then import the VVIQ timeline in the required language and add it to your main timeline:

```javascript
import { vviqGerman } from '@kogpsy/jspsych-vviq';

timeline.push(vviqGerman);
```

You further need jsPsych to be installed and initialized, as well as the _HTMLKeyboardResponsePlugin_ and the _SurveyLikertPlugin_. These are peer dependencies of `@kogpsy/jspsych-vviq`

### Languages

At the moment, the items are available in english and german.

For english use:

```javascript
import { vviqEnglish } from '@kogpsy/jspsych-vviq';
```

For german use:

```javascript
import { vviqGerman } from '@kogpsy/jspsych-vviq';
```

### Styling

You can apply your own css styles to the elements.

- All text - except for the rating scale labels - is usually wrapped in `<p>` tags.
- The main instruction is further wrapped in a div with the css class `jspsych-instruction-main`.
- The block instructions are wrapped in a div with the css class `jspsych-instruction-block`.
- The rating scale labels are wrapped in a div with the css class `jspsych-scalelabel`,
- The continue button label is wrapped in a div with the css class `jspsych-buttonlabel`.

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

To add more languages, three steps are necessary:

1. Put the translated strings to `src/strings.json`
2. Adjust the `getTimeline()` functin in `src/timeline.js` to respect the newly added language
3. In `src/index.js`, generate a new timeline in the newly added language, and export it
