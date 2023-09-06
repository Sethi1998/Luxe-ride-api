"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = __importDefault(require("@/Database/models/vehicle"));
const vehicleCategory_1 = __importDefault(require("@/Database/models/vehicleCategory"));
const vehicleCategory_2 = require("@/Errors/vehicleCategory");
exports.default = async (input, user) => {
    try {
        const category = await vehicleCategory_1.default.findOne({
            _id: input.vehicleCategory,
        }).lean();
        const vinNumber = await (0, vehicleCategory_2.vinNumberExist)(input.vinNumber);
        if (vinNumber) {
            return { error: vinNumber };
        }
        const plateNumber = await (0, vehicleCategory_2.numberPlateExist)(input.plateNumber);
        if (plateNumber) {
            return { error: plateNumber };
        }
        const categoryNotExist = (0, vehicleCategory_2.categoryDoesNotExistsError)(category);
        if (categoryNotExist)
            return {
                error: categoryNotExist,
            };
        const vehicleData = {
            ...input,
            vehicleOwner: user._id,
        };
        const addVehicle = await vehicle_1.default.create(vehicleData).then((res) => {
            return res.populate('vehicleCategory');
        });
        return {
            data: addVehicle,
        };
    }
    catch (error) {
        return {
            error: error,
        };
    }
};
//# sourceMappingURL=addvehicleController.js.map