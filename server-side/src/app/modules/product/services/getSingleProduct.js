import {Product} from "../product.model.js";

//------get single product
export const getSingleProductService = async (productID) => {
  const product = await Product.findOne({_id: productID}).populate('addedBy');

  if (product?.productID) {
    product.totalViews++;
    await product.save();
  }
  return product;
};
