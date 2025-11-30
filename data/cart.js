export const cart = [];

export function addToCart(productId, productQuantity) {
  let matchedItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchedItem = cartItem;
    }
  });

  if (matchedItem) {
    matchedItem.productQuantity += productQuantity;
  } else {
    cart.push({
      productId,
      productQuantity,
    });
  }
}
