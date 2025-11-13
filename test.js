const assert = require("assert");
const { calculateAverageGrade, getGradeLetter } = require("./main");

try {
  // Valid case 1: Normal grades
  assert.strictEqual(calculateAverageGrade([80, 90, 70]), 80);

  // Valid case 2: All same grades
  assert.strictEqual(calculateAverageGrade([85, 85, 85, 85]), 85);

  // Invalid case 1: Empty array (handles by returning NaN)
  const emptyResult = calculateAverageGrade([]);
  assert.ok(isNaN(emptyResult), "Empty array should return NaN");

  // Invalid case 2: Non-numeric values (handles by returning NaN)
  const invalidResult = calculateAverageGrade(["a", "b", "c"]);
  assert.ok(isNaN(invalidResult), "Non-numeric values should return NaN");

  // Intentional fail (forces CI failure)
  //   assert.strictEqual(calculateAverageGrade([100, 80, 60]), 79);

  // Valid case 1: Grade A
  assert.strictEqual(getGradeLetter(95), "A");

  // Valid case 2: Grade C
  assert.strictEqual(getGradeLetter(70), "C");

  // Invalid case 1: Negative score (handles by returning F)
  assert.strictEqual(getGradeLetter(-10), "F");

  // Invalid case 2: Score above 100 (handles by returning A)
  assert.strictEqual(getGradeLetter(150), "A");

  // Intentional fail (forces CI failure)
  //   assert.strictEqual(getGradeLetter(92), "B");

  console.log("All tests passed.");
} catch (error) {
  console.error("A test failed:", error.message);
  process.exit(1);
}
