/*
Input: object of objects
Output: new object
Rules:
  -average exam grade's weight is 65%
  -sum of exercises scores' weight is 35%
  -round each produced final grade to one decimal point
Algorithm:
  -create an object to store the letter equivalents and their corresponding scores (switch?)
  -create an array of the values of each property from the input object (students)
  -create an array of the objects referenced by the `scores` property in each student object
  -for each of the students' scores
    -get the average exam grade and multiply it by its weight
    -get the sum of all exercises grades and do the same
    -sum the produced results and round the result down to one decimal point
    -map the result grade to the letter grade
    -format the result and push it in the `studentGrades` array of the result object
  -
*/

const NUM_OF_EXAMS = 4;
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function mapGradeToLetter(grade) {
  let letterEquivalents = {
    93: "A",
    85: "B",
    77: "C",
    69: "D",
    60: "E",
    0: "F"
  };

  let minGrade = Object.keys(letterEquivalents)
                       .sort((a, b) => b - a)
                       .find(minGrade => grade >= minGrade);

  return letterEquivalents[minGrade];
}

function getFinalGrade(studentScores) {
  let averageExamGrade = studentScores.exams.reduce((total, current) => total + current) / NUM_OF_EXAMS;
  let exercisesTotalScore = studentScores.exercises.reduce((total, current) => total + current);
  let finalGrade = Math.round(averageExamGrade * .65 + exercisesTotalScore * .35, 1);
  return `${finalGrade} (${mapGradeToLetter(finalGrade)})`;
}

function getExamMinGrade(grades, examNum) {
  return grades.reduce((min, grades) => min < grades[examNum] ? min : grades[examNum], Infinity);
}

function getExamMaxGrade(grades, examNum) {
  return grades.reduce((max, grades) => max > grades[examNum] ? max : grades[examNum], 0);
}

function getExamAvgGrade(grades, examNum) {
  return Number((grades.reduce((total, studentGrades) => total + studentGrades[examNum], 0)
    / grades.length).toFixed(1));
}

function getExamInfo(examsGrades) {
  let exams = [];

  for (let exam = 0; exam < NUM_OF_EXAMS; exam += 1) {
    let minimum = getExamMinGrade(examsGrades, exam);
    let maximum = getExamMaxGrade(examsGrades, exam);
    let average = getExamAvgGrade(examsGrades, exam);

    exams.push({ average, minimum, maximum });
  }

  return exams;
}

function generateClassRecordSummary(scores) {
  let studentScores = Object.values(scores).map(student => student.scores);
  let studentGrades = studentScores.map(getFinalGrade);
  let examsGrades = studentScores.map(student => student.exams);
  let exams = getExamInfo(examsGrades);

  return { studentGrades, exams };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }