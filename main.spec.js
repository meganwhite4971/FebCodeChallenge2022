const cartCalculator = require('./main.js');

test("Cart Total is Zero when No Products in Cart", () => {
    let cart = [];
    expect(cartCalculator.mainFunction(cart)).toEqual("0.00");
});

test("Cart Total is corrrect when 1 Product in Cart", () => {
    let cart = ['E'];
    expect(cartCalculator.mainFunction(cart)).toEqual("299.00");
});

test("Cart Total is correct for 5 distinct products", () => {
    let expectedPrice = "1121.25";
    let cart = ['A','B','C','D','E'];
    let actualPrice = cartCalculator.mainFunction(cart);
    expect(actualPrice).toEqual(expectedPrice);
});

test("Cart Total matches Code Challenge Example", () => {
    let cart = ['A','A','B','B','C','C','D','E'];
    let expectedPrice = "1928.55";
    let actualPrice = cartCalculator.mainFunction(cart);
    expect(actualPrice).toEqual(expectedPrice);
});

test("Remove Distinct Products From Cart", () => {
    let distinctSet = new Set(['A','B','C']);
    let cart = ['A','A','B','C','C'];
    let expectedCart = ['A','C'];
    let actualArray = cartCalculator.removeDistinctProductsFromCart(distinctSet, cart);
    expect(actualArray).toEqual(expectedCart);
});