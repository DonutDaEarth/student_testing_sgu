const calculateAverageGrade = (grades) => {
  if (!grades || grades.length === 0) {
    throw new Error("Grades array cannot be empty");
  }

  if (grades.some((grade) => typeof grade !== "number" || isNaN(grade))) {
    throw new Error("All grades must be valid numbers");
  }

  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

const getGradeLetter = (score) => {
  if (typeof score !== "number" || isNaN(score)) {
    throw new Error("Score must be a valid number");
  }

  if (score < 0 || score > 100) {
    throw new Error("Score must be between 0 and 100");
  }

  const grades = [
    { min: 90, letter: "A" },
    { min: 75, letter: "B" },
    { min: 65, letter: "C" },
    { min: 50, letter: "D" },
    { min: 0, letter: "F" },
  ];

  const grade = grades.find((grade) => score >= grade.min);
  return grade ? grade.letter : "F";
};

module.exports = { calculateAverageGrade, getGradeLetter };
