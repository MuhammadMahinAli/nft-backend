import express from "express";
import {createProduct, deleteProduct, getAllProduct, getProductsByCollection, getProductsByPrice, getProductsByUser, getSingleProduct, updateProduct} from "./product.controller.js";
import { validateRequest } from "../../middlewars/validateRequest.js";
import { createProductZodSchema, updateProductZodSchema } from "./product.validation.js";

const router = express.Router();

router.post("/", validateRequest(createProductZodSchema), createProduct);
router.get("/getAll", getAllProduct);
router.get("/getsingle/:id", getSingleProduct);
router.get("/getByCollection/:id", getProductsByCollection);
router.get("/getByUser/:id", getProductsByUser);
router.get("/getByPrice", getProductsByPrice);
router.patch("/:id", validateRequest(updateProductZodSchema), updateProduct);
router.delete("/:id", deleteProduct);
//
export const ProductRoutes = router;
