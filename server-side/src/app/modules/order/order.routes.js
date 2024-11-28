import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createOrderZodSchema, updateOrderZodSchema} from "./order.validation.js";
import {createOrder, deleteOrder, getAllOrderByUser, getSingleOrder, updateOrder} from "./order.controller.js";

const router = express.Router();

router.post("/", validateRequest(createOrderZodSchema), createOrder);
router.get("/getByUser/:id", getAllOrderByUser);
router.get("/getsingle/:id", getSingleOrder);
router.patch("/:id", validateRequest(updateOrderZodSchema), updateOrder);
router.delete("/:id", deleteOrder);
//
export const OrderRoutes = router;
