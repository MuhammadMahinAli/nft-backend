import {Version} from "../../version/version.model.js";

export const getProductsByPriceService = async (maxPrice, minPrice, price) => {
  let results = [];
  //when max and min price are given
  if (maxPrice && minPrice && !price) {
    results = await Version.find(
      {
        $and: [{"products.price": {$gte: minPrice}}, {"products.price": {$lte: maxPrice}}],
      },

      {products: 1, _id: 0}
    ).populate({
      path: "products.productID",
      match: {$and: [{"versions.price": {$gte: minPrice}}, {"versions.price": {$lte: maxPrice}}]},
    });
  } //when max  price is given
  else if (maxPrice && !minPrice && !price) {
    results = await Version.find(
      {
        "products.price": {$lte: maxPrice},
      },

      {products: 1, _id: 0}
    ).populate({
      path: "products.productID",
      match: {"versions.price": {$lte: maxPrice}},
    });
  } //when min  price is given
  else if (minPrice && !maxPrice && !price) {
    results = await Version.find(
      {
        "products.price": {$gte: minPrice},
      },

      {products: 1, _id: 0}
    ).populate({
      path: "products.productID",
      match: {"versions.price": {$gte: minPrice}},
    });
  } //when only price is given
  else if (!maxPrice && !minPrice && price) {
    results = await Version.find(
      {
        "products.price": price,
      },
      {products: 1, _id: 0}
    ).populate({
      path: "products.productID",
      match: {"versions.price": price},
    });
  }
  //extract and filter unique products
  const uniqueProducts = results.reduce((uniqueProduct, version) => {
    version.products.forEach((product) => {
      if (product.productID) {
        uniqueProduct.add(product.productID);
      }
    });
    return uniqueProduct;
  }, new Set());

  return [...uniqueProducts];
};
