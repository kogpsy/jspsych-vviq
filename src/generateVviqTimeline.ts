/*
 * jspsych-vviq
 *
 * Author: Robin Bürkli <robuba.jr@gmx.ch>
 * License: MIT
 *
 * This project aims to deliver a version of the VVIQ questionnaire (as proposed
 * by Marks, 1973) which can be used in a jsPsych experiment.
 *
 * This file contains the generator function which creates a jsPsych timeline
 * based on parameters.
 */

// Import the necessary jsPsych plugins
import SurveyLikertPlugin from '@jspsych/plugin-survey-likert';
import HtmlKeyboardResponsePlugin from '@jspsych/plugin-html-keyboard-response';
// Import the strings in different languages
import { stringsEnglish } from './strings_english';
import { stringsGerman } from './strings_german';

/**
 * Generates your desired variant of the VVIQ.
 *
 * @param language The desired questionnaire language (default: 'english')
 * @param items The item blocks to be included (default: [1,2,3,4,5,6,7,8])
 * @param instruction Controls whether the main instruction is included or not
 * @returns A jsPsych timeline (which can be added to another timeline)
 */
export const generateVviqTimeline = (
  language?: string,
  items?: Array<number>,
  instruction?: boolean
) => {
  // Declare variable to hold requested items array reference copy
  let requestedItems;
  // Declare general instruction toggle boolean
  let showGeneralInstruction;
  // Default to english items
  let strings = stringsEnglish;
  // If the specified language is german, then use german items
  if (language === 'german') {
    strings = stringsGerman;
  }
  if (items) {
    // Throw an error if erroneus blocks are requested
    items.forEach((element) => {
      if (element > 8 || element < 1) {
        throw 'jspsych-vviq: Error: You cannot request item blocks that do not exist. There are 8 blocks (nr. 1-8).';
      }
      // Copy the item array reference
      requestedItems = items;
    });
  } else {
    // If no items were specified, default to full questionnaire timeline
    requestedItems = [1, 2, 3, 4, 5, 6, 7, 8];
  }
  // If the instruction parameter was not set, show instruction, otherwise let
  // it control behavior
  if (instruction === undefined) {
    showGeneralInstruction = true;
  } else {
    showGeneralInstruction = instruction;
  }

  // Declare the response scale labels
  const scale = [
    strings.scale1,
    strings.scale2,
    strings.scale3,
    strings.scale4,
    strings.scale5,
  ];

  // Conditinally construct the timeline
  let timeline = [];

  // General instruction
  if (showGeneralInstruction) {
    timeline.push({
      type: HtmlKeyboardResponsePlugin,
      stimulus: strings.instructionGeneral,
      choices: [' '],
    });
  }

  // Item block 1
  if (requestedItems.includes(1)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock1,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB1Q1, labels: scale, required: true },
        { prompt: strings.questionB1Q2, labels: scale, required: true },
        { prompt: strings.questionB1Q3, labels: scale, required: true },
        { prompt: strings.questionB1Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 2
  if (requestedItems.includes(2)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock2,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB2Q1, labels: scale, required: true },
        { prompt: strings.questionB2Q2, labels: scale, required: true },
        { prompt: strings.questionB2Q3, labels: scale, required: true },
        { prompt: strings.questionB2Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 3
  if (requestedItems.includes(3)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock3,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB3Q1, labels: scale, required: true },
        { prompt: strings.questionB3Q2, labels: scale, required: true },
        { prompt: strings.questionB3Q3, labels: scale, required: true },
        { prompt: strings.questionB3Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 4
  if (requestedItems.includes(4)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock4,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB4Q1, labels: scale, required: true },
        { prompt: strings.questionB4Q2, labels: scale, required: true },
        { prompt: strings.questionB4Q3, labels: scale, required: true },
        { prompt: strings.questionB4Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 5
  if (requestedItems.includes(5)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock5,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB5Q1, labels: scale, required: true },
        { prompt: strings.questionB5Q2, labels: scale, required: true },
        { prompt: strings.questionB5Q3, labels: scale, required: true },
        { prompt: strings.questionB5Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 6
  if (requestedItems.includes(6)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock6,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB6Q1, labels: scale, required: true },
        { prompt: strings.questionB6Q2, labels: scale, required: true },
        { prompt: strings.questionB6Q3, labels: scale, required: true },
        { prompt: strings.questionB6Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 7
  if (requestedItems.includes(7)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock7,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB7Q1, labels: scale, required: true },
        { prompt: strings.questionB7Q2, labels: scale, required: true },
        { prompt: strings.questionB7Q3, labels: scale, required: true },
        { prompt: strings.questionB7Q4, labels: scale, required: true },
      ],
    });
  }

  // Item block 8
  if (requestedItems.includes(8)) {
    timeline.push({
      type: SurveyLikertPlugin,
      preamble: strings.instructionBlock8,
      button_label: strings.continueButtonLabel,
      questions: [
        { prompt: strings.questionB8Q1, labels: scale, required: true },
        { prompt: strings.questionB8Q2, labels: scale, required: true },
        { prompt: strings.questionB8Q3, labels: scale, required: true },
        { prompt: strings.questionB8Q4, labels: scale, required: true },
      ],
    });
  }

  // Return a jsPsych timeline object
  return {
    timeline,
  };
};
