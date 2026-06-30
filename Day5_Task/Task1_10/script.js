// Task 1: Employee Salary
let monthlySalary = 45000;

function calculateSalary() {
    return monthlySalary * 12;
}

let yearlySalary = calculateSalary();
console.log("Yearly Salary : ₹" + yearlySalary);



// Task 2: Student Pass or Fail
let marks = 72;

function checkResult() {

    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }

}
let result = checkResult();
console.log("Result : " + result);



// Task 3: Food Bill
let burgerPrice = 180;
let quantity = 3;

function calculateTotalBill() {
    return burgerPrice * quantity;
}

let foodBill = calculateTotalBill();
console.log("Food Bill : ₹" + foodBill);




// Task 4: Welcome Employee
function welcomeEmployee(name, department) {
    console.log("Welcome, " + name + "! You are in the " + department + " department.");
}
welcomeEmployee("Nishanth PR", "Software Engineering");





//5. Shopping Discount
let originalPrice = 5000;
let discount = 500;

function calculateFinalAmount() {
    return originalPrice - discount;
}

let finalAmount = calculateFinalAmount();
console.log("Final Amount : ₹" + finalAmount);




// Task 6: Company Login
function dashboard() {
    console.log("Loading Dashboard...");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);




// Task 7: Food Delivery

function delivered() {
    console.log("Delivered");
}

function outForDelivery(callback) {
    console.log("Out for Delivery");
    callback();
}

function preparingFood(callback) {
    console.log("Preparing Food");
    callback(delivered);
}

function orderReceived(callback) {
    console.log("Order Received");
    callback(outForDelivery);
}

orderReceived(preparingFood);



// Task 8: Lucky Draw

function* luckyDraw() {

    yield "10% Coupon";

    yield "20% Coupon";

    yield "50% Coupon";

    yield "Better Luck Next Time";
}

let coupon = luckyDraw();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);




// Task 9: Employee Bonus

function bonus(salary) {

    return function (bonusAmount) {

        return salary + bonusAmount;

    };

}

let totalSalary = bonus(50000)(5000);

console.log("Total Salary : ₹" + totalSalary);





// Task 10: Merge Employee Details

let employeePersonal = {
    name: "Nishanth PR",
    age: 25,
    city: "Mysuru"
};

let employeeOffice = {
    employeeId: 101,
    department: "Software Engineering",
    salary: 50000
};

let employeeDetails = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employeeDetails);