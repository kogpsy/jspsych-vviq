/*
 * jspsych-vviq
 *
 * Author: Robin Bürkli <robuba.jr@gmx.ch>
 * License: MIT
 *
 * This project aims to deliver a version of the VVIQ2 questionnaire which can
 * be used in a jsPsych experiment.
 *
 * This file functions as an interface between the experiment and all the VVIQ
 * items in different languages.
 */

// Import the getTimeline() function to gain access to the translated timelines
import { getTimeline } from './timeline';

// Generate items in all required languages
export const vviqGerman = getTimeline('german');
export const vviqEnglish = getTimeline('english');
