const productDefaultPrice = 299;
const discountArray = [0, .05, .10, .20, .25];
let cartTotal = 0;
let discountPercentAmount = 0;

exports.mainFunction = (cart) => {
  cartTotal = 0.0;
  return this.calculateCartTotal(cart);
}

exports.calculateCartTotal = (cart) => {
  if (cart.length === 0) {
    return cartTotal.toFixed(2);
  }
  
  let distinctProducts = new Set(cart);
  let distinctSetSize = distinctProducts.size;

  if (distinctSetSize !== 0) {
    discountPercentAmount = discountArray[distinctSetSize - 1];
  }

  let totalBeforeDiscount = distinctSetSize * productDefaultPrice;
  cartTotal += (totalBeforeDiscount * (1 - discountPercentAmount));
  
  cart = this.removeDistinctProductsFromCart(distinctProducts, cart);
  
  return this.calculateCartTotal(cart);
}

exports.removeDistinctProductsFromCart = (distinctProductSet, cart) =>  {
  for (let item of distinctProductSet) {
    cart.splice(cart.indexOf(item), 1);
  }

  return cart;
}