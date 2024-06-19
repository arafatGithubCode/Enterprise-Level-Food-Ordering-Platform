import express from "express";
const router = express.Router();
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

// /api/my/user
router.post("/", jwtCheck, MyUserController.createCurrentUser);

export default router;
