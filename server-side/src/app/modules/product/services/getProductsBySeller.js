import {Product} from "../product.model.js";

export const getProductsBySellerService = async (userId) => {
  const products = await Product.find({addedBy: userId});
  return products;
};
