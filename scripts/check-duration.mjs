import assert from "node:assert/strict";

import {
  formatDuration,
  formatMonth,
  formatRange,
  monthsBetween,
} from "../src/lib/duration.ts";

const now = new Date();

assert.equal(monthsBetween("2024-01", "2024-02", now), 2);
assert.equal(formatDuration(2), "2 mos");

assert.equal(monthsBetween("2025-09", "2025-12", now), 4);
assert.equal(formatDuration(4), "4 mos");

assert.equal(monthsBetween("2026-01", "2026-04", now), 4);
assert.equal(formatDuration(4), "4 mos");

assert.equal(formatMonth("2026-01"), "Jan 2026");
assert.equal(formatMonth("2025-09"), "Sep 2025");
assert.equal(formatMonth("2024-01"), "Jan 2024");

assert.equal(formatDuration(0), "0 mos");
assert.equal(formatDuration(1), "1 mo");
assert.equal(formatDuration(12), "1 yr");
assert.equal(formatDuration(13), "1 yr 1 mo");

assert.equal(
  formatRange("2025-09", "2025-12", now),
  "Sep 2025 – Dec 2025 · 4 mos",
);

console.log("check-duration: OK");
console.log(`  raphoncell  ${formatRange("2026-01", "2026-04", now)}`);
console.log(`  len         ${formatRange("2025-09", "2025-12", now)}`);
console.log(`  raffid      ${formatRange("2024-01", "2024-02", now)}`);
