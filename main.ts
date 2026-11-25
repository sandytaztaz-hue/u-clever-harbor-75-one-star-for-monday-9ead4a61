import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Monday's special was Tuesday, reheated, with a side of meetings I never ordered.";

// The gate allows 1-180 characters and the brief caps the review at 25 words.
// Fail loudly instead of submitting a line the gate would reject.
const words = LINE.trim().split(/\s+/);
if (LINE.length < 1 || LINE.length > 180 || words.length > 25) {
  throw new Error(
    `entry out of bounds: ${LINE.length} chars, ${words.length} words`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
