// Task 7: Company Employee Directory

let employee = {
    name: "Nishanth",
    age: 25,
    department: "Development",
    salary: 50000,
    experience: 1
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}