/*
 * jspsych-vviq
 *
 * Author: Robin Bürkli <robuba.jr@gmx.ch>
 * License: MIT
 *
 * This project aims to deliver a version of the VVIQ questionnaire (as proposed
 * by Marks, 1973) which can be used in a jsPsych experiment.
 *
 * This file uses strings from './strings.json' to generate a jsPsych timeline
 * containing VVIQ items in different languages.
 */

// Import the necessary jsPsych plugins
import SurveyLikertPlugin from '@jspsych/plugin-survey-likert';
import HtmlKeyboardResponsePlugin from '@jspsych/plugin-html-keyboard-response';
// Import the strings in different languages
import stringsMultilingual from './strings.json';

// Generate the jsPsych timeline based on the requested language
export const getTimeline = (language) => {
  // Default to english items
  let strings = stringsMultilingual.english;
  // If the specified language is german, then use german items
  if (language === 'german') {
    strings = stringsMultilingual.german;
  }

  // The instruction item
  const instruction = {
    type: HtmlKeyboardResponsePlugin,
    stimulus: strings.instructionGeneral,
    choices: [' '],
  };

  // The response scale labels
  const scale = [
    strings.scale1,
    strings.scale2,
    strings.scale3,
    strings.scale4,
    strings.scale5,
  ];

  // First item block (a jsPsych "trial")
  const itemBlock1 = {
    type: SurveyLikertPlugin,
    preamble: strings.instructionBlock1,
    button_label: strings.continueButtonLabel,
    questions: [
      {
        prompt: strings.questionB1Q1,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB1Q2,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB1Q3,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB1Q4,
        labels: scale,
        required: true,
      },
    ],
  };

  // Second item block (a jsPsych "trial")
  const itemBlock2 = {
    type: SurveyLikertPlugin,
    preamble: strings.instructionBlock2,
    button_label: strings.continueButtonLabel,
    questions: [
      {
        prompt: strings.questionB2Q1,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB2Q2,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB2Q3,
        labels: scale,
        required: true,
      },
      { prompt: strings.questionB2Q4, labels: scale, required: true },
    ],
  };

  // Third item block (a jsPsych "trial")
  const itemBlock3 = {
    type: SurveyLikertPlugin,
    preamble: strings.instructionBlock3,
    button_label: strings.continueButtonLabel,
    questions: [
      {
        prompt: strings.questionB3Q1,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB3Q2,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB3Q3,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB3Q4,
        labels: scale,
        required: true,
      },
    ],
  };

  // Fourth item block (a jsPsych "trial")
  const itemBlock4 = {
    type: SurveyLikertPlugin,
    preamble: strings.instructionBlock4,
    button_label: strings.continueButtonLabel,
    questions: [
      {
        prompt: strings.questionB4Q1,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB4Q2,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB4Q3,
        labels: scale,
        required: true,
      },
      {
        prompt: strings.questionB4Q4,
        labels: scale,
        required: true,
      },
    ],
  };

  // Return a jsPsych timeline object
  return {
    timeline: [instruction, itemBlock1, itemBlock2, itemBlock3, itemBlock4],
  };
};
