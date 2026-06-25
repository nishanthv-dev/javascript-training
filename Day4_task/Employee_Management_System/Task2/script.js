// Task 2: Student Result Portal

let studentName = prompt("Enter Student Name");

let subject1 = Number(prompt("Enter Subject 1 Marks"));
let subject2 = Number(prompt("Enter Subject 2 Marks"));
let subject3 = Number(prompt("Enter Subject 3 Marks"));

let total = subject1 + subject2 + subject3;
let percentage = total / 3;

let grade;

if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else {
    grade = "Fail";
}

console.log(`
==============================
      STUDENT RESULT
==============================

Student Name : ${studentName}

Total Marks  : ${total}

Percentage   : ${percentage.toFixed(2)}%

Grade         : ${grade}

==============================
`);