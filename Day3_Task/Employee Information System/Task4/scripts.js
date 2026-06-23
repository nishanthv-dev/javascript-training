// Task 4: Bank ATM Eligibility

let userName = prompt("Enter User Name");
let accountBalance = Number(prompt("Enter Account Balance"));
let withdrawalAmount = Number(prompt("Enter Withdrawal Amount"));

if (withdrawalAmount <= accountBalance) {
    console.log("Transaction Successful");
}
else {
    console.log("Insufficient Balance");
}

console.log(`
=================================
         ATM DETAILS
=================================

User Name          : ${userName}
Account Balance    : ₹${accountBalance}
Withdrawal Amount  : ₹${withdrawalAmount}

=================================
`);