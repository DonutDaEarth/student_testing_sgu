const assert = require("assert");
const { calculateAverageGrade, getGradeLetter } = require("./main");

try {
  assert.strictEqual(calculateAverageGrade([80, 90, 70]), 80);
  assert.strictEqual(calculateAverageGrade([85, 85, 85, 85]), 85);
  assert.throws(
    () => calculateAverageGrade([]),
    /Grades array cannot be empty/,
    "Should throw error for empty array"
  );
  assert.throws(
    () => calculateAverageGrade(["a", "b", "c"]),
    /All grades must be valid numbers/,
    "Should throw error for non-numeric values"
  );
  // assert.strictEqual(calculateAverageGrade([100, 80, 60]), 79);

  assert.strictEqual(getGradeLetter(95), "A");
  assert.strictEqual(getGradeLetter(70), "C");
  assert.throws(
    () => getGradeLetter(-10),
    /Score must be between 0 and 100/,
    "Should throw error for negative score"
  );
  assert.throws(
    () => getGradeLetter(150),
    /Score must be between 0 and 100/,
    "Should throw error for score above 100"
  );
    assert.strictEqual(getGradeLetter(92), "B");

  console.log("All tests passed.");
} catch (error) {
  console.error("A test failed:", error.message);
  process.exit(1);
}
