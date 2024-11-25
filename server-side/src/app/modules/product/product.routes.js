import express from "express";
import {certifyOrRejectProduct, createProduct, deleteProduct, getAllProduct, getProductsByCollection, getProductsByPrice, getProductsBySeller, getProductsByUser, getSingleProduct, updateProduct} from "./product.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createProductZodSchema, updateProductZodSchema} from "./product.validation.js";

const router = express.Router();

router.post("/", validateRequest(createProductZodSchema), createProduct);
router.get("/getAll", getAllProduct);
router.get("/getsingle/:id", getSingleProduct);
router.get("/getByCollection/:id", getProductsByCollection);
router.get("/getByUser/:id", getProductsByUser);
router.get("/getBySeller/:id", getProductsBySeller);
router.get("/getByPrice", getProductsByPrice);
router.patch("/:id", validateRequest(updateProductZodSchema), updateProduct);
router.post("/certify", certifyOrRejectProduct);
router.post("/reject", certifyOrRejectProduct);
router.delete("/:id", deleteProduct);
//
export const ProductRoutes = router;
