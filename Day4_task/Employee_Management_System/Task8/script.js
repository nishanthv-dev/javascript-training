// Task 8: Cashback Generator

function* cashbackOffers() {

    yield "10% Cashback";

    yield "20% Cashback";

    yield "50% Cashback";

    yield "Better Luck Next Time";
}

let offer = cashbackOffers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);