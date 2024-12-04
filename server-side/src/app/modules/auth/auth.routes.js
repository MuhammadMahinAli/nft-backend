import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {loginZodSchema} from "./auth.validation.js";
import {loginUser} from "./auth.controller.js";
const router = express.Router();

import {authorization} from '../../middlewars/authorization.js'

router.use(authorization);

router.post("/login", validateRequest(loginZodSchema), loginUser);

export const AuthRoutes = router;
