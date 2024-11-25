import {deleteOldProducts, sendNotificationBeforDeletingProducts} from "../app/modules/recycle/recycle.utils.js";

export const recycleAutomation = () => {
  setInterval(deleteOldProducts, 24 * 60 * 60 * 1000);
  setInterval(sendNotificationBeforDeletingProducts, 24 * 60 * 60 * 1000);
};
