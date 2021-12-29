import SurveyLikertPlugin from '@jspsych/plugin-survey-likert';
import HtmlKeyboardResponsePlugin from '@jspsych/plugin-html-keyboard-response';

var german = {
	instructionGeneral: "<p>Versuchen Sie sich für jedes Item des kommenden Fragebogens ein visuelles Bild vorzustellen, indem Sie ihre Erfahrung sorgfältig einbinden. Beurteilen Sie anschliessend ihre vorgestellten Bilder nach ihrer Lebhaftigkeit auf einer fünf Punkte Skala.</p><p>Wenn Sie kein visuelles Bild vorstellen konnten, kreuzen Sie bei Lebhaftigkeit ‘1’ an. Kreuzen Sie die Zahl ‘5’ nur an, wenn ihr vorgestelltes Bild so echt und lebhaft erscheint, als stünden Sie tatsächlich dort.</p><p>Beachten Sie, dass es keine richtigen oder falschen Antworten für die folgenden Fragen gibt, und es keine Rolle spielt wie stark Sie sich die Bilder vorstellen können.</p><p>Drücken sie die [Leertaste] um mit dem ersten Fragebogen zu beginnen.</p>",
	scale1: "Kein Bild, Sie “wissen” lediglich, dass Sie an das Objekt denken",
	scale2: "Schwach und ungenau",
	scale3: "Mittelmässig klar und lebendig",
	scale4: "Klar und lebendig",
	scale5: "Absolut klar und lebendig wie beim echten Sehen",
	continueButtonLabel: "Weiter",
	instructionBlock1: "<p>Teil 1/4: Denken Sie an eine verwandte oder befreundete Person, die Sie häufig sehen (die aber nicht anwesend ist) und betrachten Sie das Bild, das vor Ihrem geistigen Auge entsteht, sorgfältig.</p>",
	questionB1Q1: "<p>Die genauen Konturen des Gesichts, der Schultern und des Körpers</p>",
	questionB1Q2: "<p>Charakteristische Kopf- und Körperhaltungen etc.</p>",
	questionB1Q3: "<p>Die genaue Haltung, Schrittlänge usw. beim Gehen</p>",
	questionB1Q4: "<p>Die verschiedenen Farben, die bei einigen bekannten Kleidungsstücken getragen werden</p>",
	instructionBlock2: "<p>Teil 2/4:  Stellen Sie sich einen Sonnenaufgang vor. Betrachten Sie das Bild, das vor Ihrem geistigen Auge entsteht, sorgfältig.</p>",
	questionB2Q1: "<p>Die Sonne steigt über den Horizont in einen dunstigen Himmel</p>",
	questionB2Q2: "<p>Der Himmel klart auf und umgibt die Sonne mit Blau</p>",
	questionB2Q3: "<p>Wolken. Ein Gewitter mit Blitzen zieht auf</p>",
	questionB2Q4: "<p>Ein Regenbogen erscheint</p>",
	instructionBlock3: "<p>Teil 3/4: Denken Sie an die Fassade eines Geschäfts in das Sie oft gehen. Betrachten Sie das Bild, das vor Ihrem geistigen Auge entsteht.</p>",
	questionB3Q1: "<p>Das Gesamtbild des Ladens von der gegenüberliegenden Strassenseite aus gesehen</p>",
	questionB3Q2: "<p>Ein Schaufenster mit den Farben, Formen und Details der einzelnen Verkaufsartikel</p>",
	questionB3Q3: "<p>Sie sind in der Nähe des Eingangs. Die Farbe, Form und Details der Tür</p>",
	questionB3Q4: "<p>Sie betreten den Laden und gehen zur Ladentheke. Sie werden bedient und Geld wechselt den Besitzer</p>",
	instructionBlock4: "<p>Teil 4/4: Denken sie an eine ländliche Szene mit Bäumen, Bergen und einem See. Betrachten Sie das Bild, das vor ihrem inneren Auge entsteht.</p>",
	questionB4Q1: "<p>Die Umrisse der Landschaft</p>",
	questionB4Q2: "<p>Die Farbe und Form der Bäume</p>",
	questionB4Q3: "<p>Die Farbe und Form des Sees</p>",
	questionB4Q4: "<p>Ein starker Wind weht durch die Bäume und auf dem See und verursacht Spiegelungen im Wasser</p>"
};
var english = {
	instructionGeneral: "<p>For each item on this questionnaire, try to form a visual image, and consider your experience carefully. For any image that you do experience, rate how vivid it is using the five-point scale described next.</p><p>If you do not have a visual image, rate vividness as ‘1’. Only use ‘5’ for images that are truly as lively and vivid as real seeing.</p><p>Please note that there are no right or wrong answers to the questions, and that it is not necessarily desirable to experience imagery or, if you do, to have more vivid imagery.</p><p>Press [space] to start the first questionnaire.</p>",
	scale1: "No image at all, you only “know” that you are thinking of the object",
	scale2: "Vague and dim",
	scale3: "Moderately clear and lively",
	scale4: "Clear and reasonably vivid",
	scale5: "Perfectly clear and as vivid as real seeing",
	continueButtonLabel: "Continue",
	instructionBlock1: "<p>Part 1/4: Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.</p>",
	questionB1Q1: "<p>The exact contour of face, head, shoulders and body</p>",
	questionB1Q2: "<p>Characteristic poses of head, attitudes of body etc.</p>",
	questionB1Q3: "<p>The precise carriage, length of step etc., in walking</p>",
	questionB1Q4: "<p>The different colours worn in some familiar clothes</p>",
	instructionBlock2: "<p>Part 2/4:  Visualise a rising sun. Consider carefully the picture that comes before your mind’s eye.</p>",
	questionB2Q1: "<p>The sun rising above the horizon into a hazy sky</p>",
	questionB2Q2: "<p>The sky clears and surrounds the sun with blueness</p>",
	questionB2Q3: "<p>Clouds.  A storm blows up with flashes of lightning</p>",
	questionB2Q4: "<p>A rainbow appears</p>",
	instructionBlock3: "<p>Part 3/4: Think of the front of a shop which you often go to.  Consider the picture that comes before your mind’s eye.</p>",
	questionB3Q1: "<p>The overall appearance of the shop from the opposite side of the road</p>",
	questionB3Q2: "<p>A window display including colours, shapes and details of individual items for sale</p>",
	questionB3Q3: "<p>You are near the entrance. The colour, shape and details of the door</p>",
	questionB3Q4: "<p>You enter the shop and go to the counter. The counter assistant serves you. Money changes hands</p>",
	instructionBlock4: "<p>Part 4/4: Finally, think of a country scene which involves trees, mountains and a lake.</p>",
	questionB4Q1: "<p>The contours of the landscape</p>",
	questionB4Q2: "<p>The colour and shape of the trees</p>",
	questionB4Q3: "<p>The colour and shape of the lake</p>",
	questionB4Q4: "<p>A strong wind blows on the trees and on the lake causing waves in the water</p>"
};
var stringsMultilingual = {
	german: german,
	english: english
};

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

// Generate the jsPsych timeline based on the requested language
const getTimeline = (language) => {
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

// Generate items in all required languages
const vviqGerman = getTimeline('german');
const vviqEnglish = getTimeline('english');

export { vviqEnglish, vviqGerman };
