import {Notification} from "../notification/notification.model.js";
import {Recycle} from "./recycle.model.js";
//deleteing old products from recycle after 30days
export const deleteOldProducts = async () => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    // Find and delete product older than 30 days
    const result = await Recycle.updateMany({"products.addedAt": {$lt: thirtyDaysAgo}}, {$pull: {products: {addedAt: {$lt: thirtyDaysAgo}}}});
    console.log(result);
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
};

//
//sending notifications after 20 days of adding product in recycle
export const sendNotificationBeforDeletingProducts = async () => {
  try {
    const twentyDaysAgo = new Date();
    twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20);
    const twentyOneDaysAgo = new Date();
    twentyOneDaysAgo.setDate(twentyOneDaysAgo.getDate() - 21);
    //finding matching products
    const result = await Recycle.find({"products.addedAt": {$lt: twentyDaysAgo, $gt: twentyOneDaysAgo}});
    if (result) {
      await Promise.all(
        result?.map(async (recycle) => {
          await Promise.all(
            recycle?.products?.map(async (product) => {
              if (product.addedAt < twentyDaysAgo && product.addedAt > twentyOneDaysAgo) {
                await Notification.create({
                  title: "Restore product from recycle",
                  for: "one",
                  user: result.requestedBy,
                  message: "This product is in recycle since 20 days.",
                  extra: {productID: product?.productID},
                });
              }
            })
          );
        })
      );
    }
  } catch (error) {
    console.error("Error finding documents: and sending notifications", error);
  }
};
