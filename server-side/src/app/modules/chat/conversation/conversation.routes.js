import express from "express";
import {deleteConversation, getConversationByParticipants, getConversationsByDesigner} from "./conversation.controller.js";

const router = express.Router();

router.get("/designer/:id", getConversationsByDesigner);
router.get("/participants", getConversationByParticipants);
router.post("/delete", deleteConversation);
//
export const ConversationRoutes = router;
