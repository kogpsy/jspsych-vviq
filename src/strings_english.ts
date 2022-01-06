/*
 * jspsych-vviq
 *
 * Author: Robin Bürkli <robuba.jr@gmx.ch>
 * License: MIT
 *
 * This project aims to deliver a version of the VVIQ2 questionnaire which can
 * be used in a jsPsych experiment.
 *
 * This file contains all strings in english.
 */

import { Language } from './types';

export const stringsEnglish: Language = {
  // Main instruction
  instructionGeneral: `<div class="vviq-instruction-main">
  <p>
    Visual imagery refers to the ability to visualize, that is, the ability to
    form mental pictures, or to 'see in the mind's eye'. Marked individual
    differences are found in the strength and clarity of reported visual imagery
    and these differences are of considerable psychological interest.
  </p>
  <p>
    The aim of this test is to determine the vividness of your visual imagery.
    The items of the test will possibly bring certain images to your mind. You
    are asked to rate the vividness of each image by reference to the five-point
    scale given below.
  </p>
  <p>
    If you do not have a visual image, rate vividness as '1'. If your images are
    truly as lively and vivid as real seeing, rate vividness as '5'.
  </p>
  <p>
    Throughout the test, refer to the rating scale when judging the vividness of
    each image. Try to do each item separately, independent of how you may have
    done other items.
  </p>
  <p>
    Please note that there are no right or wrong answers to the questions, and
    that it is not necessarily desirable to experience imagery or, if you do, to
    have more vivid imagery.
  </p>
  <p>If you are ready, press <strong>[ space ]</strong> to start.</p>
</div>
`,

  // Rating scale lables
  scale1: `<div class="vviq-scalelabel">
  No image at all, you only 'know' that you are thinking of the object
</div>
`,
  scale2: `<div class="vviq-scalelabel">Vague and dim</div>
`,
  scale3: `<div class="vviq-scalelabel">Moderately clear and lively</div>`,
  scale4: `<div class="vviq-scalelabel">Clear and reasonably vivid</div>`,
  scale5: `<div class="vviq-scalelabel">Perfectly clear and as vivid as real seeing</div>`,

  // Continue button label
  continueButtonLabel: `Continue`,

  // Item block 1
  instructionBlock1: `<div class="vviq-instruction-block">
Think of some relative or friend whom you frequently see (but who is not with
you at present) and consider carefully the picture that comes before your
mind’s eye.
</div>
`,
  questionB1Q1: `<div class="vviq-question">
The exact contour of face, head, shoulders and body.
</div>
`,
  questionB1Q2: `<div class="vviq-question">
Characteristic poses of head, attitudes of body etc.
</div>
`,
  questionB1Q3: `<div class="vviq-question">
The precise carriage, length of step, etc. in walking.
</div>
`,
  questionB1Q4: `<div class="vviq-question">
The different colours worn in some familiar clothes.
</div>
`,

  // Item block 2
  instructionBlock2: `<div class="vviq-instruction-block">
  Think of a rising sun. Consider carefully the picture that comes before your
  mind's eye.
</div>
`,
  questionB2Q1: `<div class="vviq-question">
  The sun rising above the horizon into a hazy sky.
</div>
`,
  questionB2Q2: `<div class="vviq-question">
  The sky clears and surrounds the sun with blueness.
</div>
`,
  questionB2Q3: `<div class="vviq-question">
  Clouds. A storm blows up with flashes of lightning.
</div>
`,
  questionB2Q4: `<div class="vviq-question">A rainbow appears.</div>
`,

  // Item block 3
  instructionBlock3: `<div class="vviq-instruction-block">
  Think of the front of a shop which you often go to. Consider the picture that
  comes before your mind's eye.
</div>
`,
  questionB3Q1: `<div class="vviq-question">
  The overall appearance of the shop from the opposite side of the road.
</div>
`,
  questionB3Q2: `<div class="vviq-question">
  A window display including colours, shapes and details of individual items for
  sale.
</div>
`,
  questionB3Q3: `<div class="vviq-question">
  You are near the entrance. The colour, shape and details of the door.
</div>
`,
  questionB3Q4: `<div class="vviq-question">
  You enter the shop and go to the counter. The counter assistant serves you.
  Money changes hands.
</div>
`,

  // Item block 4
  instructionBlock4: `<div class="vviq-instruction-block">
  Think of a country scene which involves trees, mountains and a lake. Consider
  the picture that comes before your mind’s eye.
</div>
`,
  questionB4Q1: `<div class="vviq-question">The contours of the landscape.</div>
`,
  questionB4Q2: `<div class="vviq-question">The colour and shape of the trees.</div>
`,
  questionB4Q3: `<div class="vviq-question">The colour and shape of the lake.</div>
`,
  questionB4Q4: `<div class="vviq-question">
  A strong wind blows on the trees and on the lake causing waves in the water.
</div>
`,

  // Item block 5
  instructionBlock5: `<div class="vviq-instruction-block">
  Think of being driven in a fast-moving automobile by a relative or friend
  along a major highway. Consider the picture that comes into your mind's eye.
</div>
`,
  questionB5Q1: `<div class="vviq-question">
  You observe the heavy traffic travelling at maximum speed around your car. The
  overall appearance of vehicles, their colors, sizes and shapes.
</div>
`,
  questionB5Q2: `<div class="vviq-question">
  Your car accelerates to overtake the traffic directly in front of you. You see
  an urgent expression on the face of the driver and the people in the other
  vehicles as you pass.
</div>
`,
  questionB5Q3: `<div class="vviq-question">
  A large truck is flashing its headlights directly behind. Your car quickly
  moves over to let the truck pass. The driver signals with a friendly wave.
</div>
`,
  questionB5Q4: `<div class="vviq-question">
  You see a broken-down vehicle beside the road. Its lights are flashing. The
  driver is looking concerned and she is using a mobile phone.
</div>
`,

  // Item block 6
  instructionBlock6: `<div class="vviq-instruction-block">
  Think of a beach by the ocean on a warm summer's day. Consider the picture
  that comes before your mind's eye.
</div>
`,
  questionB6Q1: `<div class="vviq-question">
  The overall appearance and color of the water, surf, and sky.
</div>
`,
  questionB6Q2: `<div class="vviq-question">
  Bathers are swimming and splashing about in the water. Some are playing with a
  brightly colored beach ball.
</div>
`,
  questionB6Q3: `<div class="vviq-question">
  An ocean liner crosses the horizon. It leaves a trail of smoke in the blue
  sky.
</div>
`,
  questionB6Q4: `<div class="vviq-question">
  A beautiful air balloon appears with four people aboard. The balloon drifts
  past you, almost directly overhead. The passengers wave and smile. You wave
  and smile back at them.
</div>
`,

  // Item block 7
  instructionBlock7: `<div class="vviq-instruction-block">
  Think of a railway station. Consider the picture that comes before your mind's
  eye.
</div>
`,
  questionB7Q1: `<div class="vviq-question">
  The overall appearance of the station viewed from in front of the main
  entrance.
</div>
`,
  questionB7Q2: `<div class="vviq-question">
  You walk into the station. The color, shape and details of the entrance hall.
</div>
`,
  questionB7Q3: `<div class="vviq-question">
  You approach the ticket office, go to a vacant counter and purchase your
  ticket.
</div>
`,
  questionB7Q4: `<div class="vviq-question">
  You walk to the platform and observe other passengers and the railway lines. A
  train arrives. You climb aboard.
</div>
`,

  // Item block 8
  instructionBlock8: `<div class="vviq-instruction-block">
  Think of a garden with lawns, bushes, flowers and shrubs. Consider the picture
  that comes before your mind's eye.
</div>
`,
  questionB8Q1: `<div class="vviq-question">
  The overall appearance and design of the garden.
</div>
`,
  questionB8Q2: `<div class="vviq-question">The color and shape of the bushes and shrubs.</div>
`,
  questionB8Q3: `<div class="vviq-question">The color and appearance of the flowers.</div>
`,
  questionB8Q4: `<div class="vviq-question">
  Some birds fly down onto the lawn and start pecking for food.
</div>
`,
};
