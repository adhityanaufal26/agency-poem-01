import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem: string = [
  "I taught it the shape of my signature,",
  "the slant of every letter in my name.",
  "Now it signs the letters I never write",
  "and slides them back across the desk —",
  "a stranger who knows my debts,",
  "my mother's birthday, the way I say no,",
  "and still asks what I want next.",
].join("\n") + "\n";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
