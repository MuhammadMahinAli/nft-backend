import express from "express";
const router = express.Router();
import { getTokenInfoByIdController, getTokenInfoByNftIdController} from "./tokenInfo.controller.js"
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization);


router.get("/getTokenById/:id", getTokenInfoByIdController);
router.get("/getTokenByNftId/:id", getTokenInfoByNftIdController);



export const TokenInfoRoutes = router;