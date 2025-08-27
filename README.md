# Code Challenge: Student Score Analyzer

## Task

You are asked to build a JavaScript CLI program that analyzes the scores of students in a small class. A starter template, `index.js`, has been provided. The program should do the following:

1. **Store student** data in an array.
   - Each student should be represented as an object with properties:

      ```js
         { name: "Alice", scores: [78, 85, 90] }
      ```

      - `name` → a string
      - `scores` → an array of numbers (each student has 3 test scores)
2. **Use array methods** to calculate results:
   - `Use map()` to create a new array of student averages.
   - `Use filter()` to get only students who scored an average above 80.
   - `Use reduce()` to calculate the class average score.
3. **Output results clearly**:
   - Each student’s name and their average score.
   - A list of students who are "Top Performers" (average > 80).
   - The overall class average.

## Example Expected Output

```yaml
Student Averages:
Alice → 84.33
Bob → 72.00
Charlie → 90.67

Top Performers:
Alice
Charlie

Class Average: 82.33
```

## Rules & Requirements

- You must use `map()` to calculate averages.
- You must use at least one other array method (`filter`, `reduce`, `forEach`, etc.) logically.
- Write clean, readable code (functions encouraged).
- No hardcoding of averages. All calculations must come from the scores array.
- Bonus: Format averages to 2 decimal places.

## Extension (Bonus Challenge)

- Add a function that determines the highest-scoring student and prints:

   `"Top Student: Charlie with an average of 90.67"`

- Allow the user to add a new student with scores using `prompt-sync`.
