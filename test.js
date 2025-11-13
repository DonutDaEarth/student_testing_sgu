const assert = require("assert");
const { calculateAverageGrade, getGradeLetter } = require("./main");

try {
  // Valid case 1: Normal grades
  assert.strictEqual(calculateAverageGrade([80, 90, 70]), 80);

  // Valid case 2: All same grades
  assert.strictEqual(calculateAverageGrade([85, 85, 85, 85]), 85);

  // Invalid case 1: Empty array (should throw error)
  assert.throws(
    () => calculateAverageGrade([]),
    /Grades array cannot be empty/,
    "Should throw error for empty array"
  );

  // Invalid case 2: Non-numeric values (should throw error)
  assert.throws(
    () => calculateAverageGrade(["a", "b", "c"]),
    /All grades must be valid numbers/,
    "Should throw error for non-numeric values"
  );

  // Intentional fail (forces CI failure)
  //   assert.strictEqual(calculateAverageGrade([100, 80, 60]), 79);

  // Valid case 1: Grade A
  assert.strictEqual(getGradeLetter(95), "A");

  // Valid case 2: Grade C
  assert.strictEqual(getGradeLetter(70), "C");

  // Invalid case 1: Negative score (should throw error)
  assert.throws(
    () => getGradeLetter(-10),
    /Score must be between 0 and 100/,
    "Should throw error for negative score"
  );

  // Invalid case 2: Score above 100 (should throw error)
  assert.throws(
    () => getGradeLetter(150),
    /Score must be between 0 and 100/,
    "Should throw error for score above 100"
  );

  // Intentional fail (forces CI failure)
  //   assert.strictEqual(getGradeLetter(92), "B");

  console.log("All tests passed.");
} catch (error) {
  console.error("A test failed:", error.message);
  process.exit(1);
}
