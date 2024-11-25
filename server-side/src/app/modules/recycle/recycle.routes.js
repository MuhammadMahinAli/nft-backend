import express from "express";
import {createRecycle, deleteRecycle, getAllRecycle, getSingleRecycle, reprintProduct, updateRecycleStatus} from "./recycle.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createRecycleZodSchema} from "./recycle.validation.js";

const router = express.Router();

router.post("/", validateRequest(createRecycleZodSchema), createRecycle);
// router.post("/deleteProduct", validateRequest(addORDeleteProductToRecycleZodSchema), addOrDeleteProductToRecycle);
router.get("/getAll", getAllRecycle);
router.get("/getsingle", getSingleRecycle);
router.post("/deleteRecycle", deleteRecycle);
router.post("/updateStatus", updateRecycleStatus);
router.post("/reprint", reprintProduct);
//
export const RecycleRoutes = router;
