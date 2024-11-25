import {LuckyDraw} from "./luckyDraw.model.js";

//find last luckyDRaw id
const findLastLuckyDrawId = async () => {
  const lastDraw = await LuckyDraw.findOne({}, {luckyDrawID: 1}).sort({createdAt: -1}).lean();

  return lastDraw?.luckyDrawID ? lastDraw.luckyDrawID.substring(3) : undefined;
};
//generate luckyDrawID
export const generateLuckyDrawID = async () => {
  const currentId = (await findLastLuckyDrawId()) || (0).toString().padStart(3, "0");
  let newId = (parseInt(currentId) + 1).toString().padStart(3, "0");
  newId = "LD-" + newId;
  return newId;
};
