import {Collection} from "./collection.model.js";
import {addProductToCollectionService, deleteProductToCollectionService} from "./collection.service.js";
//find last collection id
const findLastCollectionId = async () => {
  const lastCollection = await Collection.findOne({}, {collectionID: 1}).sort({createdAt: -1}).lean();

  return lastCollection?.collectionID ? lastCollection.collectionID.substring(3) : undefined;
};
//generate collection id
export const generateCollectionID = async () => {
  const currentId = (await findLastCollectionId()) || (0).toString().padStart(3, "0");
  let newId = (parseInt(currentId) + 1).toString().padStart(3, "0");
  newId = "CL-" + newId;
  return newId;
};

///add product to the different collections
export const addProductToCollections = async (collections, productID, session) => {
  await Promise.all(
    collections?.map(async (collection) => {
      const {collectionID} = collection;
      await addProductToCollectionService(collectionID, productID, session);
    })
  );
};
///delete product to the different collections
export const deleteProductFromCollections = async (collections, productID, session) => {
  await Promise.all(
    collections?.map(async (collection) => {
      const {collectionID} = collection;
      await deleteProductToCollectionService(collectionID, productID, session);
    })
  );
};
//
export const collectionFilterableFields = ["search", "hasOffers", "totalMinted", "mintedRecentMonth"];
//
export const collectionSearchableFields = ["title", "description", "traits"];
