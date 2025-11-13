const assert = require("assert");
const { calculateAverageGrade, getGradeLetter } = require("./main");

try {
  // Valid case 1: Normal grades
  assert.strictEqual(calculateAverageGrade([80, 90, 70]), 80);

  // Valid case 2: All same grades
  assert.strictEqual(calculateAverageGrade([85, 85, 85, 85]), 85);

  // Invalid case 1: Empty array
  assert.throws(
    () => calculateAverageGrade([]),
    /Cannot read property/,
    "Should handle empty array"
  );

  // Invalid case 2: Non-numeric values
  assert.throws(
    () => {
      const result = calculateAverageGrade(["a", "b", "c"]);
      if (isNaN(result)) throw new Error("Invalid input: non-numeric values");
    },
    /Invalid input/,
    "Should handle non-numeric values"
  );

  // Intentional fail
  //   assert.strictEqual(calculateAverageGrade([100, 80, 60]), 79);

  // Valid case 1: Grade A
  assert.strictEqual(getGradeLetter(95), "A");

  // Valid case 2: Grade C
  assert.strictEqual(getGradeLetter(70), "C");

  // Invalid case 1: Negative score
  assert.strictEqual(getGradeLetter(-10), "F");

  // Invalid case 2: Score above 100
  assert.strictEqual(getGradeLetter(150), "A");

  // Intentional fail
  //   assert.strictEqual(getGradeLetter(92), "B");

  console.log("All tests passed.");
} catch (error) {
  console.error("A test failed:", error.message);
  process.exit(1);
}
