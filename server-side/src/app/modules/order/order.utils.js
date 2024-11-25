export const calculateTotalPrice = (products) => {
  const totalPrice = products.reduce((initialPrice, product) => {
    return initialPrice + product.price * product.quantity;
  }, 0);
  return totalPrice;
};
