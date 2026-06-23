// Task 2: Supermarket Billing

let productName = prompt("Enter Product Name");
let productPrice = Number(prompt("Enter Product Price"));
let quantity = Number(prompt("Enter Quantity"));

let totalBill = productPrice * quantity;

let discount = 0;
let finalAmount = totalBill;

if (totalBill > 5000) {
    discount = totalBill * 0.10;
    finalAmount = totalBill - discount;
} else {
    finalAmount = totalBill;
}

console.log(`
=================================
      SUPERMARKET BILL
=================================

Product Name : ${productName}
Price        : ₹${productPrice}
Quantity     : ${quantity}

Total Bill   : ₹${totalBill}
Discount     : ₹${discount}
Final Amount : ₹${finalAmount}

=================================
`);