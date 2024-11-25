import {Product} from "./product.model.js";

//find last product id
const findLastProductId = async () => {
  const lastProduct = await Product.findOne({}, {productID: 1}).sort({createdAt: -1}).lean();

  return lastProduct?.productID ? lastProduct.productID.substring(3) : undefined;
};
//generate product id
export const generateProductID = async () => {
  const currentId = (await findLastProductId()) || (0).toString().padStart(3, "0");
  let newId = (parseInt(currentId) + 1).toString().padStart(3, "0");
  newId = "PR-" + newId;
  return newId;
};
//
export const productFilterableFields = ["search", "recycleRequest", "addStatus", "sold", "currency", "market_X", "hasOffers", "onAuction", "listed", "certificateReq"];
//
export const productSearchableFields = ["title", "description"];
