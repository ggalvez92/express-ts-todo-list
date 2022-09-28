"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var routes_1 = require("./modules/user/routes");
var config_1 = require("./config");
var router = (0, express_1.Router)();
exports.router = router;
router.get("/", function (_req, res) {
    res.json({
        status: 200,
        message: "Testing2"
    });
});
router.use(config_1.setupResponse);
router.use("/users", routes_1.UserRoutes);
//# sourceMappingURL=routes.js.map