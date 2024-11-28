import express from "express";
import {addOrDeleteProductToRecycle, deleteRecycle, getAllRecycle, getSingleRecycle} from "./recycle.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {addORDeleteProductToRecycleZodSchema} from "./recycle.validation.js";

const router = express.Router();

router.post("/", validateRequest(addORDeleteProductToRecycleZodSchema), addOrDeleteProductToRecycle);
router.post("/deleteProduct", validateRequest(addORDeleteProductToRecycleZodSchema), addOrDeleteProductToRecycle);
router.get("/getAll", getAllRecycle);
router.get("/getsingle/:id", getSingleRecycle);
router.delete("/:id", deleteRecycle);
//
export const RecycleRoutes = router;
