"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
var express_1 = require("express");
var VerifyToken_1 = require("@middlewares/VerifyToken");
var manageErrors_1 = require("@src/utils/manageErrors");
var TaskController_1 = require("./controllers/TaskController");
var TaskCreateDTO_1 = require("./dtos/TaskCreateDTO");
var TaskUpdateDTO_1 = require("./dtos/TaskUpdateDTO");
var TaskUpdateStatusDTO_1 = require("./dtos/TaskUpdateStatusDTO");
var TaskRoutes = (0, express_1.Router)();
exports.TaskRoutes = TaskRoutes;
TaskRoutes.get("/fieldsData", VerifyToken_1.verifyToken, TaskController_1.getDataForCreating);
TaskRoutes.post("/", VerifyToken_1.verifyToken, (0, manageErrors_1.manageErrors)(TaskCreateDTO_1.TaskCreateDTO), TaskController_1.create);
TaskRoutes.get("/:id", VerifyToken_1.verifyToken, TaskController_1.read);
TaskRoutes.get("/", VerifyToken_1.verifyToken, TaskController_1.list);
TaskRoutes.put("/:id", VerifyToken_1.verifyToken, (0, manageErrors_1.manageErrors)(TaskUpdateDTO_1.TaskUpdateDTO), TaskController_1.update);
TaskRoutes.put("/:id/updateStatus", VerifyToken_1.verifyToken, (0, manageErrors_1.manageErrors)(TaskUpdateStatusDTO_1.TaskUpdateStatusDTO), TaskController_1.updateStatus);
TaskRoutes.delete("/:id", VerifyToken_1.verifyToken, TaskController_1.destroy);
//# sourceMappingURL=routes.js.map