// Employee Object
let employee = {
    employeeName: "Nishanth",
    employeeId: "STK-26-3201",
    department: "Development",
    experience: 3,
    salary: 50000,
    attendance: 92
};

// Skills Array
let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// Company Object
let company = {
    companyName: "Stackly IT",
    location: "Coimbatore"
};

// Salary Calculation
let bonus = 5000;
let finalSalary = employee.salary + bonus;

// Login Verification
let username = "admin";
let password = "12345";

let loginStatus =
    (username === "admin" && password === "12345")? "Success": "Failed";

// Attendance Check
let examStatus =employee.attendance >= 75? "Eligible": "Not Eligible";

// Prompt
let enteredName = prompt("Enter Employee Name");

// Confirm
let joinCompany = confirm("Do you want to join our company?");

// Alert
if (joinCompany) {
    alert(`Welcome ${enteredName}`);
} else {
    alert("Thank You");
}

// Console Methods
console.log("Portal Loaded");
console.warn("Bonus Added");
console.error("Sample Error Message");

// Final Output
console.log(`
==============================
      EMPLOYEE PORTAL
==============================

Employee Name : ${employee.employeeName}

Employee ID   : ${employee.employeeId}

Department    : ${employee.department}

Experience    : ${employee.experience} Years

Salary        : ₹${employee.salary}

Bonus         : ₹${bonus}

Final Salary  : ₹${finalSalary}

Skills        : ${skills.join(", ")}

Attendance    : ${employee.attendance}%

Exam Status   : ${examStatus}

Login Status  : ${loginStatus}

Company       : ${company.companyName}

Location      : ${company.location}

==============================
`);