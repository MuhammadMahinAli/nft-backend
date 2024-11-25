import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {addToCartZodSchema, createCartZodSchema, deleteFromCartZodSchema, handleQuantityZodSchema} from "./cart.validation.js";
import {addOrDeleteProductToCart, createCart, deleteCart, getSingleCart, handleQuantity} from "./cart.controller.js";
const router = express.Router();

router.post("/", validateRequest(createCartZodSchema), createCart);
router.post("/addToCart", validateRequest(addToCartZodSchema), addOrDeleteProductToCart);
router.post("/deleteFromCart", validateRequest(deleteFromCartZodSchema), addOrDeleteProductToCart);
router.post("/handleQuantity", validateRequest(handleQuantityZodSchema), handleQuantity);
router.get("/getsingle/:id", getSingleCart);
router.delete("/:id", deleteCart);
//
export const CartRoutes = router;
