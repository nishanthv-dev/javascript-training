// Task 10: Mini Employee Portal

let employees = [

    {
        id: 101,
        name: "Naveen",
        salary: 30000
    },

    {
        id: 102,
        name: "John",
        salary: 60000
    }
];

// View Employees
function viewEmployees() {

    console.log("Employee Details");

    for (let emp of employees) {

        console.log(emp);
    }
}

// Add Employee
function addEmployee(id, name, salary) {

    employees.push({
        id,
        name,
        salary
    });

    console.log("Employee Added Successfully");
}

// Search Employee
function searchEmployee(id) {

    for (let emp of employees) {

        if (emp.id === id) {

            console.log("Employee Found");

            console.log(emp);

            return;
        }
    }

    console.log("Employee Not Found");
}

// Delete Employee
function deleteEmployee(id) {

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].id === id) {

            employees.splice(i, 1);

            console.log("Employee Deleted Successfully");

            return;
        }
    }

    console.log("Employee Not Found");
}

// Calculate Bonus
function calculateBonus() {

    for (let emp of employees) {

        if (emp.salary > 50000) {

            console.log(`${emp.name} : Eligible For Bonus`);

        } else {

            console.log(`${emp.name} : Not Eligible For Bonus`);
        }
    }
}

// Total Employees
function totalEmployees() {

    console.log("Total Employees :", employees.length);
}

// Function Calls

viewEmployees();

addEmployee(103, "Nishanth", 70000);

viewEmployees();

searchEmployee(103);

calculateBonus();

totalEmployees();

deleteEmployee(102);

viewEmployees();

totalEmployees();