// Task 5: Login Validation

let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

if (enteredUsername === username && enteredPassword === password) {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}