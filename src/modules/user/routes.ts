import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { login, register } from "./controllers/UserController";
import { UserCreateDTO } from "./dtos/UserCreateDTO";
import { UserLoginDTO } from "./dtos/UserLoginDTO";

const UserRoutes = Router();
UserRoutes.post("/register", makeValidateBody(UserCreateDTO), register);
UserRoutes.post("/login", makeValidateBody(UserLoginDTO), login);

export { UserRoutes }