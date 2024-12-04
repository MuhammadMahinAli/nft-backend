import express from "express";
import {createDropZodSchema} from "./drop.validation.js";
import {addDrop, deleteDrop, getSingleDrop, updateDrop} from "./drop.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
const router = express.Router();
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization);

router.post("/", validateRequest(createDropZodSchema), addDrop);
router.get("/getsingle/:id", getSingleDrop);
router.patch("/", updateDrop);
router.delete("/:id", deleteDrop);
//
export const DropRoutes = router;
