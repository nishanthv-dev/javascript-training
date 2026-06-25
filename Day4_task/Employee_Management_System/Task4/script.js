// Task 4: Login Authentication

let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

let status =
(enteredUsername === username && enteredPassword === password)
? "Login Success"
: "Invalid Credentials";

console.log(status);