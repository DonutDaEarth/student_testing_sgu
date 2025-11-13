const calculateAverageGrade = (grades) => {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

const getGradeLetter = (score) => {
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
