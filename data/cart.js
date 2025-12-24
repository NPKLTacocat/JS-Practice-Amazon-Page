export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    productQuantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    productQuantity: 1,
  },
];

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
