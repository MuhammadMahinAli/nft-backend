import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Collection} from "./collection.model.js";
import {collectionSearchableFields, generateCollectionID} from "./collection.utils.js";
import {sortingHelper} from "../../../utils/sortingHelper.js";
import { ZodFirstPartyTypeKind } from "zod";
import {addCollectionToProductService} from "../product/services/addCollectionToProduct.js";


//----------create a new collection
export const createCollectionService = async (payload) => {
  const collectionID = await generateCollectionID();
  const data = {collectionID, ...payload};
  const newCollection = await Collection.create(data);

  if (!newCollection) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create collection");
  }
  if (payload?.products?.length > 0) {
    console.log(payload?.products);
    // Make sure payload.products is an array before proceeding
    if (Array.isArray(payload.products)) {
      await Promise.all(
        payload.products.map(async (product) => {
          await addCollectionToProductService({product, collection: {name: payload.title, collectionID: newCollection?._id}});
          // increasing quantity after adding product
          newCollection.quantity++;
        })
      );
    }
    await newCollection.save();
  }
  return newCollection;
};

//-----------get all collection
export const getAllCollectionService = async (filters, sortingOptions) => {
  //sorting
  const {sortBy, sortOrder} = sortingHelper(sortingOptions);
  const sortConditions = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //search
  const {search, ...filtersData} = filters;
  const andconditions = [];
  if (search) {
    andconditions.push({
      $or: collectionSearchableFields.map((field) => ({
        [field]: {
          $regex: search,
          $options: "i",
        },
      })),
    });
  }
  //filtering
  if (Object.keys(filtersData).length > 0) {
    andconditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        return {[field]: value};
      }),
    });
  }
  const whereCondition = andconditions?.length > 0 ? {$and: andconditions} : {};
  const collections = await Collection.find(whereCondition).sort(sortConditions);
  return collections;
};

//-----------get single collection
export const getSingleCollectionService = async (id) => {
  const collection = await Collection.findOne({_id: id});
  return collection;
};
//-----------update collection
export const updateCollectionService = async (id, payload) => {
  const isExist = await Collection.findOne({collectionID: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection doesn't found");
  }

  const result = await Collection.findOneAndUpdate({collectionID: id}, payload, {
    new: true,
  });
  return result;
};

//---------add product to collection
export const addProductToCollectionService = async (id, product, session) => {
  const isExist = await Collection.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection doesn't found");
  }

  const updatedCollection = await Collection.findOneAndUpdate(
    {_id: id},
    {$push: {products: product}},
    {
      new: true,
    }
  ).session(session);
  //if not update throw an error
  if (!updatedCollection) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add product to collection");
  }
  //increasing quantity after adding product
  updatedCollection.quantity++;
  await updatedCollection.save({session});
  return updatedCollection;
};
//---------delete product to collection
export const deleteProductToCollectionService = async (id, productID, session) => {
  const isExist = await Collection.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection doesn't found");
  }

  const updatedCollection = await Collection.findOneAndUpdate(
    {_id: id},
    {$pull: {products: productID}},
    {
      new: true,
    }
  ).session(session);
  if (!updatedCollection) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't delete product from collection");
  }
  //decreasing quantity after deleting product
  updatedCollection.quantity--;
  await updatedCollection.save();
  return updatedCollection;
};

//---------delete collection
export const deleteCollectionService = async (id) => {
  const result = await Collection.findByIdAndDelete({collectionID: id});
  return result;
};
//---------add owner to collection
export const addOwnerToCollectionService = async (id, owner, session) => {
  const isExist = await Collection.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Collection doesn't found");
  }

  const updatedCollection = await Collection.findOneAndUpdate(
    {_id: id},
    {$push: {owners: owner}},
    {
      new: true,
    }
  ).session();
  //if not update throw an error
  if (!updatedCollection) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add owner to collection");
  }
  //increasing quantity after adding product
  updatedCollection.totalMinted++;
  if (new Date(updatedCollection.mintedAt).getMonth() === new Date(Date.now()).getMonth()) {
    updatedCollection.mintedRecentMonth++;
  } else {
    updatedCollection.mintedRecentMonth = 1;
  }
  updatedCollection.mintedAt = Date.now();
  await updatedCollection.save({session});
  return updatedCollection;
};

export const getCollectionsBySellerService = async (id) => {
  const collections = await Collection.find({addedBy: id});
  return collections;
};
