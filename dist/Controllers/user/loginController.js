"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findOne_1 = __importDefault(require("@/Database/operations/User/findOne"));
const user_1 = require("@/Errors/user");
const authJwt_1 = require("@/services/authJwt");
exports.default = async (input) => {
    try {
        const user = await (0, findOne_1.default)({ email: input.email });
        const userNoExist = (0, user_1.userDoesNotExistsError)(user);
        if (userNoExist)
            return { error: userNoExist };
        const passwordValid = (0, user_1.isPasswordValid)(input.password, user.password);
        if (passwordValid)
            return { error: passwordValid };
        const token = (0, authJwt_1.signToken)(user);
        return {
            user,
            token,
        };
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=loginController.js.map