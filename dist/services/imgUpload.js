"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const sanitize_filename_1 = __importDefault(require("sanitize-filename"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const fileStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const path = `uploads`;
        fs_1.default.mkdirSync(path, { recursive: true });
        cb(null, path);
    },
    filename: (req, file, cb) => {
        if (file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg') {
            cb(null, `${(0, uuid_1.v4)()}_${(0, sanitize_filename_1.default)(file.originalname)}`);
        }
        else {
            new Error('Only .png, .jpg and .jpeg format allowed!');
            file.filename;
        }
    },
});
exports.upload = (0, multer_1.default)({
    storage: fileStorage,
    limits: { fileSize: 10 * 1024 * 1024 }, //10mb
});
router.post('/imgUpload', exports.upload.array('files'), async (req, res) => {
    const files = req.files;
    const filesUrl = files.map((item) => item.filename);
    res.json(filesUrl);
});
exports.default = router;
//# sourceMappingURL=imgUpload.js.map