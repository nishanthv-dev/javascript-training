// Task 1: Employee Management System

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    }
];

for (let emp of employees) {

    console.log(`
    Employee Name : ${emp.name}
    Employee ID   : ${emp.id}
    Salary        : ${emp.salary}
    `);

    if (emp.salary > 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}