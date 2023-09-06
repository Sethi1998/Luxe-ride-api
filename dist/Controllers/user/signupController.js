"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("@/Database/models/user"));
const user_2 = require("@/Errors/user");
const findOne_1 = __importDefault(require("@/Database/operations/User/findOne"));
exports.default = async (input) => {
    try {
        const findUser = await (0, findOne_1.default)({ email: input.email });
        const userExist = (0, user_2.userAlreadyExistError)(findUser);
        if (userExist)
            return {
                erro: userExist,
            };
        const isEmailValid = (0, user_2.isValidEmailError)(input.email);
        if (isEmailValid)
            return { error: isEmailValid };
        const isPasswordValid = (0, user_2.isValidPasswordError)(input.password);
        if (isPasswordValid)
            return { error: isPasswordValid };
        const { password } = input;
        const hashedPassword = await bcrypt_1.default.hash(password, 12);
        const createUser = await user_1.default.create({
            ...input,
            password: hashedPassword,
        });
        return createUser;
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=signupController.js.map