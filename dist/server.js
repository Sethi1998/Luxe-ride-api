"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./init-aliases");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const Database_1 = __importDefault(require("./Database"));
const imgUpload_1 = __importDefault(require("./services/imgUpload"));
const cors_1 = __importDefault(require("cors"));
const vehicleCategoryRoutes_1 = __importDefault(require("./Routes/vehicleCategoryRoutes"));
const vehicleRouter_1 = __importDefault(require("./Routes/vehicleRouter"));
const app = (0, express_1.default)();
const PORT = 8080;
const defaultRoute = '/carRental';
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('uploads'));
app.use(defaultRoute, imgUpload_1.default);
app.use(defaultRoute, userRoutes_1.default);
app.use(defaultRoute, vehicleCategoryRoutes_1.default);
app.use(defaultRoute, vehicleRouter_1.default);
(0, dotenv_1.config)();
app.listen(PORT, () => {
    (0, Database_1.default)(process.env.DB_URL);
    console.log(`🚀 Query endpoint ready at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map