//Task 3: Student Result Portal
let studentName = prompt("Enter Student Name");
let marks = Number(prompt("Enter Student Marks"));

let grade;

if (marks >= 90) {
    grade = "Grade A";
}
else if (marks >= 75) {
    grade = "Grade B";
}
else if (marks >= 50) {
    grade = "Grade C";
}
else {
    grade = "Fail";
}

console.log(`
=================================
      STUDENT RESULT PORTAL
=================================

Student Name : ${studentName}
Marks        : ${marks}
Grade        : ${grade}

=================================
`);