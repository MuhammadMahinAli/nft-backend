import express from "express";
import {addOrDeleteProductToWishList, deleteWishlist, getSingleWishlist} from "./wishList.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {addORDeleteProductToWishlistZodSchema} from "./wishList.validation.js";

const router = express.Router();

router.post("/addProduct", validateRequest(addORDeleteProductToWishlistZodSchema), addOrDeleteProductToWishList);
router.post("/deleteProduct", validateRequest(addORDeleteProductToWishlistZodSchema), addOrDeleteProductToWishList);
router.get("/getsingle/:id", getSingleWishlist);
router.delete("/:id", deleteWishlist);
//
export const WishListRoutes = router;
