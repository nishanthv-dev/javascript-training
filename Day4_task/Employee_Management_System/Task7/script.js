// Task 7: Online Food Order

function orderPlaced(callback) {
    console.log("Order Received");
    callback();
}

function foodPreparing(callback) {
    console.log("Food Preparing");
    callback();
}

function foodDelivered() {
    console.log("Food Delivered");
}

orderPlaced(function () {
    foodPreparing(function () {
        foodDelivered();
    });
});