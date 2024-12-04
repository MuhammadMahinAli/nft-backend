import express from "express";
import { validateRequest } from "../../middlewars/validateRequest.js";
import { loginZodSchema } from "./auth.validation.js";
import { loginUser, refreshToken } from "./auth.controller.js";
const router = express.Router();

router.post("/login", validateRequest(loginZodSchema), loginUser);
router.get("/refresh-token", refreshToken);
export const AuthRoutes = router;
