//Task 1: Employee Registration

let EmployeeName = "Nishanth";
const Id = "STK-26-3201";
let Department = "Software Engineering";
let Salary = 50000;
let PermanentEmployee = true;

console.log(`
    Employee Details:
    ---------------------------
    Name: ${EmployeeName}
    ID: ${Id}
    Department: ${Department} 
    Salary: ${Salary} 
    Permanent Employee: ${PermanentEmployee} 
`);




//Task 2: Employee Skills

let EmployeeSkills =["HTML","CSS","JavaScript","React","Git","Node.js"];
console.log("First Skill :", EmployeeSkills[0]);
console.log("Third Skill :", EmployeeSkills[2]);
console.log("Last Skill :", EmployeeSkills[EmployeeSkills.length-1]);
console.log("Total Skills :", EmployeeSkills.length);




//Task 3: Company Object

let company = {
    companyName: "Stackly",
    location: "Begu-Koppa Rd, Bengaluru, Karnataka",
    employees: 100,
    technologies: ["Java", "Python", "Bootstrap", "HTML & CSS"]
};

console.log(`
Company Details:
---------------------------
Company Name: ${company.companyName}
Location: ${company.location}
Number of Employees: ${company.employees}
Second Technology: ${company.technologies[1]}
Total Technologies: ${company.technologies.length}
`);




//Task 4: Salary Calculator

let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
console.log("Total Salary:", totalSalary);

let tax = totalSalary * 0.1; // Assuming 10% tax rate
console.log("Tax (10%):", tax);

let finalSalary = totalSalary - tax;
console.log("Final Salary after Tax:", finalSalary);

console.log(
    "BasicSalary:", basicSalary,
    "Bonus:", bonus,
    "TotalSalary:", totalSalary,
    "Tax:", tax,
    "FinalSalary:", finalSalary
);


//Task 5: Attendance Checker

let attendance = 92;
let status = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";
console.log(`Attendance Status: ${status}`);


//Task 6: Login Verification

let username = "admin";
let password = "12345";

let loginStatus = (username === "admin" && password === "12345") ? "Login Successful" : "Invalid Credentials";
console.log(`Login Status: ${loginStatus}`);


//Task 7: Product Billing

let productName= "Laptop";
let productPrice= 45000;
let quantity= 2;
let total= productPrice * quantity;

console.log(`
Product Billing Details:
---------------------------
Product : ${productName}
Price: ${productPrice}
Quantity: ${quantity}
Total: ${total}
`);


let visitors = 100;

console.log("Initial Visitors:", visitors);

// Pre Increment
console.log("Pre Increment:", ++visitors);
// First increments to 101, then prints 101

// Post Increment
console.log("Post Increment:", visitors++);
// First prints 101, then increments to 102

console.log("Current Visitors:", visitors);

// Pre Decrement
console.log("Pre Decrement:", --visitors);
// First decrements to 101, then prints 101

// Post Decrement
console.log("Post Decrement:", visitors--);
// First prints 101, then decrements to 100

console.log("Final Visitors:", visitors);




//Task 9: Comparison Checker
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(20 != "20"); // false
console.log(20 !== "20"); // true
console.log(5 < 10); // true
console.log(15 >= 20); // false
console.log(100 <= 100); // true



//Task 10: User Interaction
let userName = prompt("Enter Employee Name");
let userAge = prompt("Enter Employee Age");

let joinCompany = confirm("Do you want to join our company?");

if (joinCompany) {
    alert(`Welcome ${userName}`);
} else {
    alert("Thank You");
}



