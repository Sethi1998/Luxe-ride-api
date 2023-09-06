"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateOne_1 = __importDefault(require("@/Database/operations/User/updateOne"));
exports.default = async (user, input) => {
    try {
        const updateUser = await (0, updateOne_1.default)({ _id: user._id }, input);
        return updateUser;
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=updateUserController.js.map