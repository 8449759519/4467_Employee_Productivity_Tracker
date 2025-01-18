import { Router } from "express";
import { getalluser, signup, login } from "../controller/userController.js";

let userRouter = Router();

userRouter.get("", getalluser);
userRouter.post("/signup", signup);
userRouter.get("/login", login);

export { userRouter };
