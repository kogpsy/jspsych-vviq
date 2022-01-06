import { generateVviqTimeline } from './generateVviqTimeline';

test('generates the full VVIQ in english', () => {
  // Generates the full VVIQ in english and checks if its done correctly
  const vviq = generateVviqTimeline();
  // Checks if the different trials are in correct order
  expect(vviq.timeline[0].stimulus).toContain('Visual imagery refers to');
  expect(vviq.timeline[1].preamble).toContain('Think of some relative or');
  expect(vviq.timeline[2].preamble).toContain('Think of a rising sun');
  expect(vviq.timeline[3].preamble).toContain('Think of the front of a shop');
  expect(vviq.timeline[4].preamble).toContain('Think of a country scene which');
  expect(vviq.timeline[5].preamble).toContain('Think of being driven in a');
  expect(vviq.timeline[6].preamble).toContain('Think of a beach by the ocean');
  expect(vviq.timeline[7].preamble).toContain('Think of a railway station.');
  expect(vviq.timeline[8].preamble).toContain('Think of a garden with lawns');
});

test('generates a partial VVIQ in english', () => {
  // Generates the partial VVIQ in english and checks if its done correctly
  const vviq = generateVviqTimeline('english', [2, 3], false);
  // Checks if the different trials are in correct order
  expect(vviq.timeline[0].preamble).toContain('Think of a rising sun');
  expect(vviq.timeline[1].preamble).toContain('Think of the front of a shop');
  expect(vviq.timeline.length).toBe(2);
});
