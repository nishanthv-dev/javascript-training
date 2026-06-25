// Task 3: E-Commerce Cart

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill() {

    let totalBill = 0;

    for (let product of products) {
        totalBill += product.price;
    }

    let discount = 0;

    if (totalBill > 5000) {
        discount = totalBill * 0.10;
    }

    let finalAmount = totalBill - discount;

    console.log(`
==============================
      E-COMMERCE CART
==============================

Total Bill  : ₹${totalBill}

Discount    : ₹${discount}

Final Amount: ₹${finalAmount}

==============================
`);
}

calculateBill();