"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const initiateMongoServer = (DB_URL) => {
    try {
        mongoose_1.default.set('strictQuery', false);
        mongoose_1.default.connect(DB_URL);
        console.info('Connected to DB');
    }
    catch (err) {
        throw new Error(err);
    }
};
exports.default = initiateMongoServer;
//# sourceMappingURL=index.js.map