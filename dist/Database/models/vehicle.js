"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VehicleSchema = new mongoose_1.Schema({
    vehicleLocated: {
        type: String,
        required: true,
    },
    vehicleCategory: {
        type: String,
        ref: 'vehicleCategory',
        required: true,
    },
    vehicleName: {
        type: String,
        required: true,
    },
    vehicleYear: {
        type: Number,
        required: true,
    },
    plateNumber: {
        type: String,
        required: true,
        unique: true,
    },
    trim: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    vinNumber: {
        type: String,
        required: true,
        unique: true,
    },
    doors: {
        type: Number,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    insurance: [
        {
            type: String,
        },
    ],
    vehicleImages: [
        {
            type: String,
        },
    ],
    vehicleOwner: {
        type: String,
        ref: 'user',
        required: true,
    },
}, {
    timestamps: true,
});
const VehicleModel = (0, mongoose_1.model)('vehicle', VehicleSchema);
exports.default = VehicleModel;
//# sourceMappingURL=vehicle.js.map