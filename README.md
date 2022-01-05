# jspsych-vviq

Items of the VVIQ2 questionnaire for experiments that run with jsPsych 7.

At the moment there are 16 of the total of 32 items available. The rest of them will be added soon.

## How to use in your project

Install as a dependency:

```console
$ yarn add jspsych-vviq
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

Styling can be applied directly to the jsPsych classes as you would if you defined the items yourself. All the text elements which explain something are wrapped in a `<p></p>` paragraph tag.

## VVIQ2

The VVIQ2 (Marks, 1995) is the successor of the VVIQ (Marks, 1973) with a reversed scale and more items. It aims to measure the vividness and liveliness of mental images.

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
