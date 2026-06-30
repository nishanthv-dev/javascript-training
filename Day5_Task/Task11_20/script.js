// Task 11: Shopping Cart

let cart1 = ["Laptop", "Mouse"];
let cart2 = ["Keyboard", "Headset"];

let shoppingCart = [...cart1, ...cart2];

console.log(shoppingCart);




// Task 12: Student Marks

function student(name, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    console.log("Student : " + name);
    console.log("Total Marks : " + total);
    console.log("Average : " + average);
}

student("Naveen", 90, 85, 88, 95);




// Task 13: Product Details

let product = {

    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20

};

let { name, price } = product;

console.log("Product Name : " + name);
console.log("Price : ₹" + price);





// Task 14: Customer Details

let customer = [101, "Nishanth PR", "Mysuru", 9876543210];

let [id, name1, city, mobile] = customer;

console.log("ID : " + id);
console.log("Name : " + name);
console.log("City : " + city);





// Task 15: Add Product

let cart = ["Mobile", "Laptop"];

cart.push("Headphone");

console.log(cart);




// Task 16: Remove Last Product

let cart3 = ["Mobile", "Laptop", "Headphone"];

cart3.pop();

console.log(cart3);




// Task 17: Replace Employee

let employees = ["Rahul", "Arun", "John", "David"];

employees.splice(2, 1, "Naveen");

console.log(employees);




// Task 18: Search Product

let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

let productAvailable = products.includes("Laptop");

console.log("Laptop Available :", productAvailable);





// Task 19: Employee Ranking

let salaries = [25000, 45000, 30000, 70000];
salaries.sort((a, b) => a - b);
console.log("Sorted Salaries :", salaries);




// Task 20: Reverse Chat Messages

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();
console.log("Latest Messages :", messages);