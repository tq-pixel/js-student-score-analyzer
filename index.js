// Code written by T.E with minute help from D.K.

const students = [
  {name: "Alice", scores: [78, 85, 90]},
  {name: "Bob", scores: [60, 75, 81]},
  {name: "Charlie", scores: [92, 88, 92]},
  {name: "Damien", scores: [69, 79, 71]},
  {name: "Edna", scores: [88, 77, 68]}
];


function calculateAverage() {
  const studentAverages = students.map(student => {
    const total = student.scores.reduce((acc, score) => { 
      return acc + score;
    }, 0);

    const average = total / student.scores.length;

    return {
      name: student.name,
      average: average
    };
  });
  return studentAverages;
}

const studentAverages = calculateAverage(); 


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Student Averages:");
console.log("   ");
studentAverages.forEach((student) => {
  console.log(student.name + " → " + student.average.toFixed(2));
});


const topPerformers = studentAverages.filter((student) => {
  if (student.average > 80) {
    return true;
  } else {
    return false;
  }
});

// Stop checking my code and just run `node index.js` already!!

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("\nTop Performers:");
console.log("   ");
topPerformers.forEach((student) => {
  console.log(student.name);
});


const classTotal = studentAverages.reduce((acc, student) => {
  return acc + student.average;
}, 0);

const classAverage = classTotal / studentAverages.length;

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`\nClass Average: ${classAverage.toFixed(2)}`);


const topStudent = studentAverages.reduce((best, current) => {
  if (current.average > best.average) {
    return current;
  } else {
    return best;
  }
});

console.log(`\nTop Student: ${topStudent.name} with an average of ${topStudent.average.toFixed(2)}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");