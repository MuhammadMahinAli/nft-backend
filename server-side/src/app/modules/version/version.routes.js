import express from "express";
import {createVersion, getProductsByVersion, getSingleVersion} from "./version.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createVersionZodSchema} from "./version.validation.js";

const router = express.Router();

router.post("/", validateRequest(createVersionZodSchema), createVersion);
router.get("/getProducts/:id", getProductsByVersion);
router.get("/getsingle/:title", getSingleVersion);
// router.patch("/:id", validateRequest(updateUserZodSchema), updateUser);
// router.delete("/:id", deleteUser);
//
export const VersionRoutes = router;
