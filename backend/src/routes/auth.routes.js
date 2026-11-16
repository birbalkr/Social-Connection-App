import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const routes = Router();


routes.post("/user/register", registerUser)
routes.post("/user/login", loginUser)


export default routes