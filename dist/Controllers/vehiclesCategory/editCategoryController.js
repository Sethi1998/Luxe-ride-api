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
            _id: input._id,
        }).lean();
        const categoryNotExist = (0, vehicleCategory_2.categoryDoesNotExistsError)(findCategory);
        if (categoryNotExist)
            return {
                error: categoryNotExist,
            };
        const output = await vehicleCategory_1.default.findOneAndUpdate({ _id: input._id }, { $set: input }, { new: true });
        return {
            data: output,
        };
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=editCategoryController.js.map