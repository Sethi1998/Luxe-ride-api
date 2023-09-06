"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VehicleCategorySchema = new mongoose_1.Schema({
    vehicleName: {
        type: String,
        required: true,
        unique: true,
    },
    vehicleImg: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
const VehicleCategoryModel = (0, mongoose_1.model)('vehicleCategory', VehicleCategorySchema);
exports.default = VehicleCategoryModel;
//# sourceMappingURL=vehicleCategory.js.map