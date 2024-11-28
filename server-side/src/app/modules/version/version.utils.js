import {Version} from "./version.model.js";
import {addProductToVersionService, deleteProductFromVersionService} from "./version.service.js";

//find last version id
const findLastVersionId = async () => {
  const lastVersion = await Version.findOne({}, {versionID: 1}).sort({createdAt: -1}).lean();

  return lastVersion?.versionID ? lastVersion.versionID.substring(3) : undefined;
};
//generate version id
export const generateVersionID = async () => {
  const currentId = (await findLastVersionId()) || (0).toString().padStart(3, "0");
  let newId = (parseInt(currentId) + 1).toString().padStart(3, "0");
  newId = "VR-" + newId;
  return newId;
};
//generating version property for product
export const generateVersionProperty = (versions) => {
  const newVersions = [];
  versions?.forEach((version) => {
    newVersions.push({name: version?.name, versionID: version?.versionID, price: version?.price});
  });
  return newVersions;
};
///add product to the different versions
export const addProductToDifferentVersions = async (productID, versions, session) => {
  await Promise.all(
    versions?.map(async (version) => {
      const {versionID, name, ...data} = version;
      await addProductToVersionService(versionID, {productID, ...data}, session);
    })
  );
};
//delete product from different versions
export const deleteProductFromDifferentVersions = async (id, versions, session) => {
  await Promise.all(
    versions?.map(async (version) => {
      await deleteProductFromVersionService(version?.versionID, id, session);
    })
  );
};
