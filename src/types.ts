/*
 * jspsych-vviq
 *
 * Author: Robin Bürkli <robuba.jr@gmx.ch>
 * License: MIT
 *
 * This project aims to deliver a version of the VVIQ questionnaire (as proposed
 * by Marks, 1973) which can be used in a jsPsych experiment.
 *
 * This file contains TypeScript types.
 */

// Defines the structure of a language strings file. This is internally used to
// make translating a less error-prone process.
export type Language = {
  instructionGeneral: string;
  scale1: string;
  scale2: string;
  scale3: string;
  scale4: string;
  scale5: string;
  continueButtonLabel: string;
  instructionBlock1: string;
  questionB1Q1: string;
  questionB1Q2: string;
  questionB1Q3: string;
  questionB1Q4: string;
  instructionBlock2: string;
  questionB2Q1: string;
  questionB2Q2: string;
  questionB2Q3: string;
  questionB2Q4: string;
  instructionBlock3: string;
  questionB3Q1: string;
  questionB3Q2: string;
  questionB3Q3: string;
  questionB3Q4: string;
  instructionBlock4: string;
  questionB4Q1: string;
  questionB4Q2: string;
  questionB4Q3: string;
  questionB4Q4: string;
  instructionBlock5: string;
  questionB5Q1: string;
  questionB5Q2: string;
  questionB5Q3: string;
  questionB5Q4: string;
  instructionBlock6: string;
  questionB6Q1: string;
  questionB6Q2: string;
  questionB6Q3: string;
  questionB6Q4: string;
  instructionBlock7: string;
  questionB7Q1: string;
  questionB7Q2: string;
  questionB7Q3: string;
  questionB7Q4: string;
  instructionBlock8: string;
  questionB8Q1: string;
  questionB8Q2: string;
  questionB8Q3: string;
  questionB8Q4: string;
};
