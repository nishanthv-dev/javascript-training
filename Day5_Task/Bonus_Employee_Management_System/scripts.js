// Employee Management System

let employees = [
    {
        id: 101,
        name: "Nishanth",
        department: "Software Engineering",
        salary: 50000
    },
    {
        id: 102,
        name: "Rahul",
        department: "Testing",
        salary: 35000
    },
    {
        id: 103,
        name: "John",
        department: "Developer",
        salary: 60000
    }
];

// 1. Add Employee
function addEmployee(id, name, department, salary) {

    employees.push({
        id,
        name,
        department,
        salary
    });

    console.log("Employee Added Successfully");
}

// 2. View Employees
function viewEmployees() {

    console.log("Employee List");

    for (let emp of employees) {
        console.log(emp);
    }
}

// 3. Search Employee by ID
function searchEmployee(id) {

    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}

// 4. Calculate Salary + Bonus
function calculateSalary(id) {

    let employee = employees.find(emp => emp.id === id);

    if (employee) {

        let bonus = 5000;
        let totalSalary = employee.salary + bonus;

        console.log("Employee :", employee.name);
        console.log("Salary :", employee.salary);
        console.log("Bonus :", bonus);
        console.log("Total Salary :", totalSalary);

    } else {

        console.log("Employee Not Found");
    }
}

// 5. Remove Employee
function removeEmployee(id) {

    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {

        employees.splice(index, 1);

        console.log("Employee Removed");

    } else {

        console.log("Employee Not Found");
    }
}

// 6. Sort Employees by Salary
function sortEmployees() {

    employees.sort((a, b) => a.salary - b.salary);

    console.log("Employees Sorted By Salary");

    console.log(employees);
}

// 7. Find Employee by Name
function findEmployee(name) {

    let employee = employees.find(emp => emp.name === name);

    if (employee) {

        console.log(employee);

    } else {

        console.log("Employee Not Found");
    }
}

// 8. Display Employee Details using Destructuring
function displayEmployee(id) {

    let employee = employees.find(emp => emp.id === id);

    if (employee) {

        let { name, department, salary } = employee;

        console.log("Name :", name);
        console.log("Department :", department);
        console.log("Salary :", salary);

    } else {

        console.log("Employee Not Found");
    }
}

// Function Calls

viewEmployees();

addEmployee(104, "Naveen", "HR", 45000);

viewEmployees();

searchEmployee(102);

calculateSalary(101);

findEmployee("John");

displayEmployee(103);

sortEmployees();

removeEmployee(102);

viewEmployees();