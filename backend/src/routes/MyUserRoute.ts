import express from "express";
const router = express.Router();
import MyUserController from "../controllers/MyUserController";

// /api/my/user
router.post("/", MyUserController.createCurrentUser);

export default router;
