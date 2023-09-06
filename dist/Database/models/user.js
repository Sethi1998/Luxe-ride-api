"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var UserRole;
(function (UserRole) {
    UserRole["user"] = "user";
    UserRole["owner"] = "owner";
    UserRole["admin"] = "admin";
})(UserRole || (UserRole = {}));
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    license: new mongoose_1.Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        licenseNumber: {
            type: String,
        },
        dob: {
            type: String,
        },
        expirationDate: {
            type: String,
        },
    }),
    profileImg: {
        type: String,
    },
    deviceType: {
        type: String,
    },
    fcmToken: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'owner', 'admin'],
    },
}, {
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)('user', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map