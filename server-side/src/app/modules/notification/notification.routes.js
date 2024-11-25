import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createNotificationZodSchema} from "./notification.validation.js";
import {addNotification, deleteNotification, getAllNotification, getNotificationByUserId, getSingleNotification, updateStatus} from "./notification.controller.js";

const router = express.Router();

router.post("/", validateRequest(createNotificationZodSchema), addNotification);
router.get("/getAll", getAllNotification);
router.get("/getByUser/:id", getNotificationByUserId);
router.get("/getsingle/:id", getSingleNotification);
router.patch("/", updateStatus);
router.delete("/:id", deleteNotification);
//
export const NotificationRoutes = router;
