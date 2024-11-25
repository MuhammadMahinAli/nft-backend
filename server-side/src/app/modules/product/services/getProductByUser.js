import {Product} from "../product.model.js";

export const getProductsByUserService = async (userId) => {
  const products = await Product.find({owners: userId});
  return products;
};
