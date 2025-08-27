// ==========================
// Student Score Analyzer
// ==========================

// STEP 1: Define student data
// - Each student should be an object with a name and an array of scores.
// - Example: { name: "Alice", scores: [78, 85, 90] }

const students = [
  { name: "Alice", scores: [78, 85, 90] },
  { name: "Bob", scores: [60, 75, 81] },
  { name: "Charlie", scores: [92, 88, 92] },
  // TODO: Add 2 more students for practice
];


// STEP 2: Function to calculate average of an array of numbers
// HINT: use reduce() here
function calculateAverage(scores) {
  // TODO: implement average calculation
  // Formula: (sum of all scores) / (number of scores)
}


// STEP 3: Use map() to create a new array of student averages
// HINT: Each element in the new array should be an object like:
// { name: "Alice", average: 84.33 }

const studentAverages = students.map(student => {
  // TODO: return object with name and average
});


// STEP 4: Print each student’s name and average
console.log("Student Averages:");
// HINT: use forEach() to loop through studentAverages
// Format: Alice → 84.33


// STEP 5: Use filter() to get only students with average > 80
const topPerformers = studentAverages.filter(student => {
  // TODO: return true if average > 80
});


// STEP 6: Print the list of top performers
console.log("\nTop Performers:");
// TODO: loop and print names


// STEP 7: Use reduce() to calculate the class average
// HINT: sum all averages and divide by number of students
const classAverage = studentAverages.reduce((acc, student) => {
  // TODO: add each student’s average to accumulator
}, 0) / studentAverages.length;

console.log(`\nClass Average: ${classAverage.toFixed(2)}`);


// STEP 8 (Bonus): Find the highest scoring student
// HINT: reduce() can help here too
const topStudent = studentAverages.reduce((best, current) => {
  // TODO: return the student with the higher average
});

console.log(`\nTop Student: ${topStudent.name} with an average of ${topStudent.average.toFixed(2)}`);
