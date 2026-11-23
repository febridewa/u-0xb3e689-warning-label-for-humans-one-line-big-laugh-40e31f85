// Warning Label for Humans: One Line, Big Laugh
// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
// Writes one original funny safety warning label for human beings to
// /output/entry.txt. The line: a human who retroactively claims they
// predicted everything — the punchline ("proven completely wrong") lands
// on the last few words, and the joke is recognition of how people
// actually behave. Deterministic: the same fixed string on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human will insist 'I knew it all along' within seconds of being proven completely wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
