"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicleCategory_1 = __importDefault(require("@/Database/models/vehicleCategory"));
exports.default = async (limit, offset) => {
    try {
        const categories = await vehicleCategory_1.default.find()
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(offset)
            .lean();
        const totalCount = await vehicleCategory_1.default.countDocuments();
        return {
            data: categories,
            count: totalCount,
        };
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=getCategoriesController.js.map