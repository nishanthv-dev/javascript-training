
//        FOOD ORDER SYSTEM


let customerName = prompt("Enter Customer Name");

let food = {
    foodName: "Pizza",
    price: 250
};

let menuItems = ["Pizza", "Burger", "Sandwich", "French Fries", "Soft Drink"];

let quantity = 2;

let totalBill = food.price * quantity;

let confirmOrder = confirm("Do you want to place the order?");

let orderStatus = confirmOrder ? "Order Confirmed" : "Order Cancelled";

alert(`Hello ${customerName}`);

console.log("Food Order System Started Successfully");
console.warn("Please verify order details before payment");
console.error("Sample Error Message");

console.log(`
=====================================
          FOOD ORDER SYSTEM
=====================================

Customer Name : ${customerName}

Food Item     : ${food.foodName}

Price         : ₹${food.price}

Quantity      : ${quantity}

Total Bill    : ₹${totalBill}

Menu Items    : ${menuItems.join(", ")}

Order Status  : ${orderStatus}

=====================================
`);