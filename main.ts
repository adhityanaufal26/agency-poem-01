// agency-poem-01 v3 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
// The poem: a parent takes the bedtime story back from the speaker
// one night a week and tells it wrong — the wrong parts are the only
// ones with the parent in them.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Story, Told Badly',
  '',
  'Every night the speaker tells her the story',
  'in my voice, and never gets it wrong:',
  "the dragon's name, the bridge, the three",
  'gold coins under the third stone.',
  'It does the voices. It waits',
  'at the scary part. It knows',
  'when she is asleep before she does.',
  '',
  'On Fridays I take the story back.',
  "I forget the dragon's name by page two.",
  'I call the knight the baker. I lose',
  'the third coin entirely and find it',
  'in the pocket of a coat',
  'that was never in the story at all.',
  '',
  'She corrects me, every time, furious,',
  'and falls asleep mid-sentence,',
  'mid-correction, her hand',
  'still raised to stop me.',
  '',
  'The machine tells it right.',
  'That is why it is not hers.',
  'She keeps the one I get wrong,',
  'because the wrong parts',
  'are the only ones with me in them.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
