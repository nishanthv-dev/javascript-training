// Task 1: Employee Information System

let employeeName = prompt("Enter Employee Name");
let employeeAge = prompt("Enter Employee Age");
let employeeDepartment = prompt("Enter Employee Department");
let employeeSalary = Number(prompt("Enter Employee Salary"));


let employee = {
    name: employeeName,
    age: employeeAge,
    department: employeeDepartment,
    salary: employeeSalary
};


console.log(`
=================================
      EMPLOYEE INFORMATION
=================================

Employee Name       : ${employee.name}
Employee Age        : ${employee.age}
Employee Department : ${employee.department}
Employee Salary     : ₹${employee.salary}

=================================
`);

if (employee.salary > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible");
}




