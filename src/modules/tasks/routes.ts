import { Router } from "express";
import { verifyToken } from "@middlewares/VerifyToken";
import { manageErrors } from "@src/utils/manageErrors";
import { getDataForCreating, create, read, list, update, destroy } from "./controllers/TaskController";
import { TaskCreateDTO } from "./dtos/TaskCreateDTO";
import { TaskUpdateDTO } from "./dtos/TaskUpdateDTO";

const TaskRoutes = Router();
TaskRoutes.get("/fieldsData", verifyToken, getDataForCreating);
TaskRoutes.post("/", verifyToken, manageErrors(TaskCreateDTO), create);
TaskRoutes.get("/:id", verifyToken, read);
TaskRoutes.get("/", verifyToken, list);
TaskRoutes.put("/:id", verifyToken, manageErrors(TaskUpdateDTO), update);
TaskRoutes.delete("/:id", verifyToken, destroy);

export { TaskRoutes }