"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicleCategory_1 = __importDefault(require("@/Database/models/vehicleCategory"));
exports.default = async (input) => {
    const res = await vehicleCategory_1.default.deleteOne({ _id: input });
    if (res) {
        return 'Category Deleted Successfully';
    }
};
//# sourceMappingURL=deleteCategoryController.js.map