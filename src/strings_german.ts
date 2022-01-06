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

export const stringsGerman: Language = {
  // Main instruction
  instructionGeneral: `<div class="vviq-instruction-main">
  <p>
    Der Begriff 'visuelle Vorstellungskraft' bezieht sich auf die Fähigkeit zu
    visualisieren, d.h. auf die Fähigkeit mentale Bilder zu formen oder 'vor
    dem geistigen Auge zu sehen'. Markante individuelle Unterschiede in der
    Stärke und Klarheit der gemeldeten visuellen Bilder sind festzustellen.
    Diese Unterschiede sind von großem psychologischem Interesse.
  </p>
  <p>
    Ziel dieses Tests ist es, die Lebendigkeit Ihrer visuellen Vorstellungskraft
    zu ermitteln. Die Testaufgaben werden bei Ihnen möglicherweise bestimmte
    Bilder erzeugen. Sie werden gebeten, die Lebendigkeit jedes Bildes anhand
    der folgenden fünfstufigen Skala zu bewerten.
  </p>
  <p>
    Wenn Sie kein visuelles Bild sehen, bewerten Sie die Lebendigkeit mit '1'.
    Wenn Ihre Bilder so lebendig und lebhaft sind wie das echte Sehen, bewerten
    Sie die Lebendigkeit mit '5'.
  </p>
  <p>
    Orientieren Sie sich während des gesamten Tests an der Bewertungsskala, wenn
    Sie die Lebendigkeit der Bilder beurteilen. Versuchen Sie, jede Aufgabe
    separat zu bearbeiten, unabhängig davon, wie Sie andere Aufgaben bearbeitet
    haben.
  </p>
  <p>
    Beachten Sie bitte, dass es keine richtigen oder falschen Antworten auf die
    Fragen gibt, und dass es nicht unbedingt wünschenswert ist, Bilder zu
    erleben oder, falls doch, eine lebhaftere Vorstellung zu haben.
  </p>
  <p>
    Wenn Sie bereit sind, drücken Sie die <strong>[ Leertaste ]</strong>, um zu
    beginnen.
  </p>
</div>
`,

  // Rating scale lables
  scale1: `<div class="vviq-scalelabel">
  Überhaupt kein Bild, Sie 'wissen' lediglich, dass Sie an das Objekt denken
</div>
`,
  scale2: `<div class="vviq-scalelabel">Schwach und ungenau</div>
`,
  scale3: `<div class="vviq-scalelabel">Mittelmässig klar und lebendig</div>`,
  scale4: `<div class="vviq-scalelabel">Klar und ziemlich lebendig</div>`,
  scale5: `<div class="vviq-scalelabel">Absolut klar und lebendig wie beim echten Sehen</div>`,

  // Continue button label
  continueButtonLabel: `Weiter`,

  // Item block 1
  instructionBlock1: `<div class="vviq-instruction-block">
  Denken Sie an eine verwandte oder befreundete Person, die Sie häufig sehen
  (die aber nicht anwesend ist) und betrachten Sie das Bild, das vor Ihrem
  geistigen Auge entsteht, sorgfältig.
</div>
`,
  questionB1Q1: `<div class="vviq-question">
  Die genauen Konturen des Gesichts, der Schultern und des Körpers.
</div>
`,
  questionB1Q2: `<div class="vviq-question">
  Charakteristische Kopf- und Körperhaltungen etc.
</div>
`,
  questionB1Q3: `<div class="vviq-question">
  Die genaue Haltung, Schrittlänge, usw. beim Gehen.
</div>
`,
  questionB1Q4: `<div class="vviq-question">
  Die verschiedenen Farben, die bei einigen bekannten Kleidungsstücken getragen
  werden.
</div>
`,

  // Item block 2
  instructionBlock2: `<div class="vviq-instruction-block">
  Denken Sie an einen Sonnenaufgang. Betrachten Sie das Bild, das vor Ihrem
  geistigen Auge entsteht, sorgfältig.
</div>
`,
  questionB2Q1: `<div class="vviq-question">
  Die Sonne steigt über den Horizont in einen dunstigen Himmel.
</div>
`,
  questionB2Q2: `<div class="vviq-question">
  Der Himmel klart auf und umgibt die Sonne mit Blau.
</div>
`,
  questionB2Q3: `<div class="vviq-question">
  Wolken. Ein Gewitter mit Blitzen zieht auf.
</div>
`,
  questionB2Q4: `<div class="vviq-question">Ein Regenbogen erscheint.</div>
`,

  // Item block 3
  instructionBlock3: `<div class="vviq-instruction-block">
  Denken Sie an die Fassade eines Geschäfts, in das Sie oft gehen. Betrachten
  Sie das Bild, das vor Ihrem geistigen Auge entsteht.
</div>
`,
  questionB3Q1: `<div class="vviq-question">
  Das Gesamtbild des Ladens von der gegenüberliegenden Strassenseite aus
  gesehen.
</div>
`,
  questionB3Q2: `<div class="vviq-question">
  Ein Schaufenster mit den Farben, Formen und Details der einzelnen
  Verkaufsartikel.
</div>
`,
  questionB3Q3: `<div class="vviq-question">
  Sie sind in der Nähe des Eingangs. Die Farbe, Form und Details der Tür.
</div>
`,
  questionB3Q4: `<div class="vviq-question">
  Sie betreten den Laden und gehen zur Ladentheke. Sie werden bedient und Geld
  wechselt den Besitzer.
</div>
`,

  // Item block 4
  instructionBlock4: `<div class="vviq-instruction-block">
  Denken sie an eine ländliche Szene mit Bäumen, Bergen und einem See.
  Betrachten Sie das Bild, das vor ihrem inneren Auge entsteht.
</div>
`,
  questionB4Q1: `<div class="vviq-question">Die Umrisse der Landschaft.</div>
`,
  questionB4Q2: `<div class="vviq-question">Die Farbe und Form der Bäume.</div>
`,
  questionB4Q3: `<div class="vviq-question">Die Farbe und Form des Sees.</div>
`,
  questionB4Q4: `<div class="vviq-question">
  Ein starker Wind weht durch die Bäume und auf dem See, was Spiegelungen im
  Wasser verursacht.
</div>
`,

  // Item block 5
  instructionBlock5: `<div class="vviq-instruction-block">
  Denken Sie daran, wie Sie von einem Verwandten oder Freund in einem schnell
  fahrenden Auto über eine Autobahn gefahren werden. Betrachten Sie das Bild,
  das vor Ihrem geistigen Auge entsteht.
</div>
`,
  questionB5Q1: `<div class="vviq-question">
  Sie beobachten den dichten Verkehr, der mit Höchstgeschwindigkeit um Ihr Auto
  herumfliesst. Das allgemeine Erscheinungsbild der Fahrzeuge, ihre Farben,
  Größen und Formen.
</div>
`,
  questionB5Q2: `<div class="vviq-question">
  Ihr Auto beschleunigt, um den Verkehr direkt vor Ihnen zu überholen. Sie sehen
  einen eiligen Gesichtsausdruck auf den Gesichtern des Fahrers und der Personen
  in den anderen Fahrzeugen, während Sie überholen.
</div>
`,
  questionB5Q3: `<div class="vviq-question">
  Direkt hinter Ihnen blinkt ein großer Lastwagen mit seinen Scheinwerfern. Ihr
  Auto bewegt sich schnell zur Seite, um den Lastwagen vorbeizulassen. Der
  Fahrer bedankt sich mit einem freundlichen Winken.
</div>
`,
  questionB5Q4: `<div class="vviq-question">
  Sie sehen ein Fahrzeug mit einer Panne am Strassenrand. Seine Lichter blinken.
  Die Fahrerin sieht besorgt aus und benutzt ein Mobiltelefon.
</div>
`,

  // Item block 6
  instructionBlock6: `<div class="vviq-instruction-block">
  Denken Sie an einen Strand am Meer an einem warmen Sommertag. Betrachten Sie
  das Bild, das vor Ihrem geistigen Auge entsteht.
</div>
`,
  questionB6Q1: `<div class="vviq-question">
  Das allgemeine Erscheinungsbild und die Farbe des Wassers, der Brandung und
  des Himmels.
</div>
`,
  questionB6Q2: `<div class="vviq-question">
  Die Badegäste schwimmen und planschen im Wasser. Einige spielen mit einem
  knallbunten Strandball.
</div>
`,
  questionB6Q3: `<div class="vviq-question">
  Ein Linienschiff fährt am Horizont vorbei. Er hinterlässt eine Rauchfahne im
  blauen Himmel.
</div>
`,
  questionB6Q4: `<div class="vviq-question">
  Ein wunderschöner Luftballon mit vier Personen an Bord erscheint. Der Ballon
  schwebt an Ihnen vorbei, fast direkt über Ihnen. Die Passagiere winken und
  lächeln. Sie winken und lächeln zurück.
</div>
`,

  // Item block 7
  instructionBlock7: `<div class="vviq-instruction-block">
  Denken Sie an einen Bahnhof. Betrachten Sie das Bild, das vor Ihrem geistigen
  Auge entsteht.
</div>
`,
  questionB7Q1: `<div class="vviq-question">
  Das Gesamtbild des Bahnhofs vom Haupteingang aus gesehen.
</div>
`,
  questionB7Q2: `<div class="vviq-question">
  Sie betreten den Bahnhof. Die Farbe, Form und Details der Eingangshalle.
</div>
`,
  questionB7Q3: `<div class="vviq-question">
  Sie gehen zum Fahrkartenschalter, begeben sich zu einem freien Schalter und
  kaufen Ihr Ticket.
</div>
`,
  questionB7Q4: `<div class="vviq-question">
  Sie gehen zum Bahnsteig und beobachten die anderen Fahrgäste und die Gleise.
  Ein Zug kommt an. Sie steigen ein.
</div>
`,

  // Item block 8
  instructionBlock8: `<div class="vviq-instruction-block">
  Stellen Sie sich einen Garten mit Rasenflächen, Büschen, Blumen und Sträuchern
  vor. Betrachten Sie das Bild, das vor Ihrem geistigen Auge entsteht.
</div>
`,
  questionB8Q1: `<div class="vviq-question">
  Das allgemeine Erscheinungsbild und die Gestaltung des Gartens.
</div>
`,
  questionB8Q2: `<div class="vviq-question">Die Farbe und Form der Büsche und Sträucher.</div>
`,
  questionB8Q3: `<div class="vviq-question">Die Farbe und das Erscheinungsbild der Blumen.</div>
`,
  questionB8Q4: `<div class="vviq-question">
  Einige Vögel fliegen auf den Rasen und beginnen, nach Futter zu picken.
</div>
`,
};
