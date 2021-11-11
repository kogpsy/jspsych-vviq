# jspsych-vviq

Items of the VVIQ2 questionnaire for experiments that run with jsPsych 7.

## How to use in your project

Install as a dependency:

```console
$ yarn add jspsych-vviq
```

Then import the items in the required language and add them to the timeline

```javascript
import { itemsGerman as vviqItemsGerman } from 'jspsych-vviq';

timeline.push(vviqItemsGerman.instruction);
timeline.push(vviqItemsGerman.itemBlock1);
timeline.push(vviqItemsGerman.itemBlock2);
timeline.push(vviqItemsGerman.itemBlock3);
timeline.push(vviqItemsGerman.itemBlock4);
```

You need jsPsych, of course, to be installed and initialized.

### Languages

At the moment, the items are available in english and german.

For english use:

```javascript
import { itemsEnglish } from 'jspsych-vviq';
```

For german use:

```javascript
import { itemsGerman } from 'jspsych-vviq';
```

### Styling

Styling can be applied directly to the jsPsych classes as you would if you defined the items yourself. All the text elements which explain something are wrapped in a `<p></p>` paragraph tag.

## VVIQ2

TODO: What is it and who created it. The vividness of visual imagery questionnaire (VVIQ2; Marks, 1973, Marks, 1995).

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
2. Adjust the `getItems()` functin in `src/items.js` to respect the newly added language
3. In `src/index.js`, generate a new set of items in the newly added language, and export this set

### Publishing

TODO: how to publish and stuff
