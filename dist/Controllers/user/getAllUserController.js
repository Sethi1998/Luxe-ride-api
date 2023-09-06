"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const user_1 = __importDefault(require("@/Database/models/user"));
var UserRole;
(function (UserRole) {
    UserRole["user"] = "user";
    UserRole["owner"] = "owner";
    UserRole["all"] = "all";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.default = async (limit, offset, filter) => {
    let condition = {};
    try {
        if (filter === 'user') {
            condition = { role: 'user' };
        }
        else if (filter === 'owner') {
            condition = { role: 'owner' };
        }
        else if (filter === 'all') {
            condition = { $and: [{ $or: [{ role: 'user' }, { role: 'owner' }] }] };
        }
        const users = await user_1.default.find(condition)
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(offset)
            .lean();
        const totalCount = await user_1.default.countDocuments();
        return {
            data: users,
            count: totalCount,
        };
    }
    catch (error) {
        return error;
    }
};
//# sourceMappingURL=getAllUserController.js.map