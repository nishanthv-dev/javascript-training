// Task 6: ATM Withdrawal System

let userName = prompt("Enter User Name");
let balance = Number(prompt("Enter Account Balance"));
let withdrawAmount = Number(prompt("Enter Withdrawal Amount"));

if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount;

    console.log(`
==============================
        ATM RECEIPT
==============================

User Name        : ${userName}

Withdrawal Amount: ₹${withdrawAmount}

Remaining Balance: ₹${balance}

Transaction Successful

==============================
`);
}
else {

    console.log(`
==============================
        ATM RECEIPT
==============================

Insufficient Balance

==============================
`);
}