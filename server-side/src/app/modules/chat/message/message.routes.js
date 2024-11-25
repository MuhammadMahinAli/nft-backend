import express from "express";
import {deleteMessage, getMessagesByConversation, sendMessage} from "./message.controller.js";

const router = express.Router();

router.get("/conversation/:id", getMessagesByConversation);
router.post("/", sendMessage);
router.post("/delete/:id", deleteMessage);
//
export const MessageRoutes = router;
