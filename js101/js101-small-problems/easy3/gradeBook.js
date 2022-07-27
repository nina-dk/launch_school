//START
//given three positive grades <= 100
//SET average of the numbers
//Check which grade group the average number belongs to
/* 90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
*/
//PRINT the corresponding grade
//END

function getGrade(grade1, grade2, grade3) {
  const average = Math.round((grade1 + grade2 + grade3) / 3);
  let score;
  if (average >= 90) score = "A";
  else if (average >= 80) score = "B";
  else if (average >= 70) score = "C";
  else if (average >= 60) score = "D";
  else score = "F";

  console.log(`You got ${score}!`);
}

//Using an object alternative (not safe, since for...in might not iterate in the correct order)
//Will probably work for this case though

function getGrade(grade1, grade2, grade3) {
  const average = Math.round((grade1 + grade2 + grade3) / 3);
  const GRADES = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0
  };

  for (let grade in GRADES) {
    if (average >= GRADES[grade]) {
      console.log(`You got ${grade}!`);
      return;
    }
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"