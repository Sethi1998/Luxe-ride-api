"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addvehicleController_1 = __importDefault(require("@/Controllers/vehicles/addvehicleController"));
const getVehiclesController_1 = __importDefault(require("@/Controllers/vehicles/getVehiclesController"));
const authJwt_1 = require("@/services/authJwt");
const imgUpload_1 = require("@/services/imgUpload");
const express_1 = __importDefault(require("express"));
const vehicleRouter = express_1.default.Router();
//gteVehicles
vehicleRouter.get('/getVehicles', [authJwt_1.parseJwt], async (req, res) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const response = await (0, getVehiclesController_1.default)(parseInt(limit), parseInt(offset));
    res.json(response);
});
//addVehicle
vehicleRouter.post('/addVehicle', [authJwt_1.parseJwt], imgUpload_1.upload.fields([{ name: 'insurance' }, { name: 'vehicleImages' }]), async (req, res) => {
    const input = req.body;
    const user = req.user;
    const files = req.files;
    console.group(files.insurance, 'files');
    const inputBody = {
        ...input,
        insurance: files.insurance,
        vehicleImages: files.vehicleImages,
    };
    const response = await (0, addvehicleController_1.default)(inputBody, user);
    res.json(response);
});
exports.default = vehicleRouter;
//# sourceMappingURL=vehicleRouter.js.map