// Task 10: Employee Attendance

let employeeName = prompt("Enter Employee Name");
let attendance = prompt("Enter Attendance (Present/Absent)");

let status =
attendance.toLowerCase() === "present"
? "Present"
: "Absent";

console.log(`
Welcome ${employeeName}

Attendance: ${status}
`);