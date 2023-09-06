"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicleCategory_1 = __importDefault(require("@/Database/models/vehicleCategory"));
const vehicleCategory_2 = require("@/Errors/vehicleCategory");
exports.default = async (input) => {
    try {
        const findCategory = await vehicleCategory_1.default.findOne({
            vehicleName: input.vehicleName,
        }).lean();
        const categoryExist = (0, vehicleCategory_2.categoryAlreadyExistError)(findCategory);
        if (categoryExist)
            return {
                error: categoryExist,
            };
        const category = await vehicleCategory_1.default.create(input);
        return {
            data: category,
        };
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=createCategoryController.js.map