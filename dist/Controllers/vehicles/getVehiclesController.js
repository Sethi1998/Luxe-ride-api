"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = __importDefault(require("@/Database/models/vehicle"));
exports.default = async (limit, offset) => {
    try {
        const vehicles = await vehicle_1.default.find()
            .populate('vehicleCategory')
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(offset)
            .lean();
        const totalCount = await vehicle_1.default.countDocuments();
        return {
            data: vehicles,
            count: totalCount,
        };
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=getVehiclesController.js.map