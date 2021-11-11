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

// Import the getItems() function to gain access to the translated items
import { getItems } from './items';

// Generate items in all required languages
const itemsGerman = getItems('german');
const itemsEnglish = getItems('english');

// Export everything
module.exports = {
  itemsGerman,
  itemsEnglish,
};
