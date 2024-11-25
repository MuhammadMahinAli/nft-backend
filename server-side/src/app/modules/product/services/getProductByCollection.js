import {Collection} from "../../collection/collection.model.js";

export const getProductByCollectionService = async (collectionID) => {
  const collection = await Collection.findOne({collectionID}, {_id: 0, products: 1}).populate({path: "products"});
  const {products} = collection;
  return products;
};
