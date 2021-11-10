/*
TODO c'est quoi ça?
*/

const instruction = {
  type: 'html-keyboard-response',
  stimulus:
    'Versuchen Sie für jedes Item des kommenden Fragebogens ein visuelles Bild vorzustellen, ' +
    'indem Sie ihre Erfahrung sorgfältig einbinden. <br> Beurteilen Sie anschliessend ihre vorgestellten ' +
    'Bilder nach ihrer Lebhaftigkeit auf einer fünf Punkte Skala. <br>' +
    'Wenn Sie kein visuelles Bild vorstellen konnten, kreuzen Sie bei Lebhaftigkeit ‘1’ an.  <br>' +
    'Kreuzen Sie die Zahl ‘5’ nur an, wenn ihr vorgestelltes Bild so echt und lebhaft erscheint <br>' +
    'als stünden Sie tatsächlich dort. <br>' +
    'Beachten Sie, dass es keine richtigen oder falschen Antworten für die folgenden Fragen gibt, <br>' +
    'und es keine Rolle spielt wie stark Sie sich die Bilder vorstellen können.  <br> ' +
    'Drücken sie die [Leertaste] um mit dem ersten Fragebogen zu beginnen ',
  choices: ['space'],
};

const scale = [
  'Kein Bild, Sie “wissen” lediglich, dass Sie an das Objekt denken',
  'Schwach und ungenau',
  'Mittelmässig klar und lebendig',
  'Klar und lebendig',
  'Absolut klar und lebendig wie beim echten Sehen',
];

const itemBlock1 = {
  type: 'survey-likert',
  preamble:
    'Teil 1/4: Denken Sie an eine verwandte oder befreundete Person, die Sie häufig sehen  ' +
    '(die aber nicht anwesend ist) <br> und betrachten Sie das Bild, ' +
    'das vor Ihrem geistigen Auge entsteht, sorgfältig.',
  questions: [
    {
      prompt:
        'Die genauen Konturen des Gesichts, der Schultern und des Körpers',
      labels: scale,
      required: true,
    },
    {
      prompt: 'Charakteristische Kopf- und Körperhaltungen etc.',
      labels: scale,
      required: true,
    },
    {
      prompt: 'Die genaue Haltung, Schrittlänge usw. beim Gehen',
      labels: scale,
      required: true,
    },
    {
      prompt:
        'Die verschiedenen Farben, die bei einigen bekannten Kleidungsstücken getragen werden',
      labels: scale,
      required: true,
    },
  ],
};

export const itemsGerman = {
  instruction,
  itemBlock1,
};
