import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {productFilterableFields} from "./product.utils.js";
import {pick} from "../../../utils/pick.js";
import {getAllProductService} from "./services/getAllProduct.js";
import {getSingleProductService} from "./services/getSingleProduct.js";
import {deleteProductService} from "./services/deleteProduct.js";
import {createProductService} from "./services/createProduct.js";
import {getProductByCollectionService} from "./services/getProductByCollection.js";
import {getProductsByUserService} from "./services/getProductByUser.js";
import {sortingFields} from "../../../utils/sortingHelper.js";
import {getProductsByPriceService} from "./services/getProductsByPrice.js";
import {updateProductService} from "./services/updateProduct.js";
import {paginationFields} from "../../../utils/pagination.js";
import {getProductsBySellerService} from "./services/getProductsBySeller.js";
import {certifyProductService} from "./services/certifyProduct.js";
import {rejectCertificationService} from "./services/rejectCertification.js";

//create a product
export const createProduct = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newProduct = await createProductService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully!",
    data: newProduct,
  });
});
//get all products
export const getAllProduct = catchAsync(async (req, res) => {
  const filters = pick(req.query, productFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const products = await getAllProductService(filters, paginationOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully!",
    meta: products?.meta,
    data: products?.data,
  });
});
//get single product
export const getSingleProduct = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const product = await getSingleProductService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully!",
    data: product,
  });
});
//delete product
export const deleteProduct = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const product = await deleteProductService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully!",
    data: product,
  });
});

//------get products by collection
export const getProductsByCollection = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const products = await getProductByCollectionService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully!",
    data: products,
  });
});
//------get products by user
export const getProductsByUser = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const products = await getProductsByUserService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully!",
    data: products,
  });
});
//------get products by seller
export const getProductsBySeller = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const products = await getProductsBySellerService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully!",
    data: products,
  });
});
//------get products by price
export const getProductsByPrice = catchAsync(async (req, res) => {
  const {maxPrice, minPrice, price} = req?.query;
  const products = await getProductsByPriceService(maxPrice, minPrice, price);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully!",
    data: products,
  });
});

////-------update product
export const updateProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const updatedProduct = await updateProductService(id, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully!",
    data: updatedProduct,
  });
});
////-------certify or reject product
export const certifyOrRejectProduct = catchAsync(async (req, res) => {
  const {certify, ...updateData} = req?.body;
  let result;
  if (certify) {
    result = await certifyProductService(updateData);
  } else {
    result = await rejectCertificationService(updateData);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Product ${certify ? "certified" : "certification rejected"} successfully!`,
    data: result,
  });
});
