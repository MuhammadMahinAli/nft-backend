import httpStatus from "http-status";
import {createCollectionService, deleteCollectionService, getAllCollectionService, getCollectionsBySellerService, getSingleCollectionService, updateCollectionService} from "./collection.service.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {catchAsync} from "../../../utils/catchAsync.js";
import {pick} from "../../../utils/pick.js";
import {collectionFilterableFields} from "./collection.utils.js";
import {sortingFields} from "../../../utils/sortingHelper.js";

//-------create a collection
export const createCollection = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newCollection = await createCollectionService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Collection created successfully!",
    data: newCollection,
  });
});
//-------get all collections
export const getAllCollection = catchAsync(async (req, res) => {
  const filters = pick(req.query, collectionFilterableFields);
  const sortingOptions = pick(req.query, sortingFields);
  const collections = await getAllCollectionService(filters, sortingOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "collections retrieved successfully!",
    data: collections,
  });
});
//------get single collection
export const getSingleCollection = catchAsync(async (req, res) => {
  const id = req.params.id;
  const collection = await getSingleCollectionService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "collection retrieved successfully!",
    data: collection,
  });
});
//-------update collection
export const updateCollection = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const updatedCollection = await updateCollectionService(id, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Collection updated successfully!",
    data: updatedCollection,
  });
});

//---------delete collection
export const deleteCollection = catchAsync(async (req, res) => {
  const id = req.params.id;

  const collection = await deleteCollectionService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "collection deleted successfully!",
    data: collection,
  });
});
export const getCollectionsBySeller = catchAsync(async (req, res) => {
  const collections = await getCollectionsBySellerService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "collections retrieved successfully!",
    data: collections,
  });
});
