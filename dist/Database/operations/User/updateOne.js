"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("@/Database/models/user"));
const usersUpdateOne = async (filter, update) => {
    await user_1.default.findOneAndUpdate(filter, update);
    const user = await user_1.default.findOne(filter).lean();
    return user;
};
exports.default = usersUpdateOne;
//# sourceMappingURL=updateOne.js.map