"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleFindOne = void 0;
const vehicle_1 = __importDefault(require("@/Database/models/vehicle"));
const vehicleFindOne = async (filter) => {
    return await vehicle_1.default.findOne(filter).lean();
};
exports.vehicleFindOne = vehicleFindOne;
//# sourceMappingURL=vehicleFindOne.js.map