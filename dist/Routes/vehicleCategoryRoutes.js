"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createCategoryController_1 = __importDefault(require("@/Controllers/vehiclesCategory/createCategoryController"));
const deleteCategoryController_1 = __importDefault(require("@/Controllers/vehiclesCategory/deleteCategoryController"));
const editCategoryController_1 = __importDefault(require("@/Controllers/vehiclesCategory/editCategoryController"));
const getCategoriesController_1 = __importDefault(require("@/Controllers/vehiclesCategory/getCategoriesController"));
const authJwt_1 = require("@/services/authJwt");
const imgUpload_1 = require("@/services/imgUpload");
const express_1 = __importDefault(require("express"));
const vechicleCategoryRouter = express_1.default.Router();
///getCategory
vechicleCategoryRouter.get('/getCategories', [authJwt_1.parseJwtAdmin], async (req, res) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const response = await (0, getCategoriesController_1.default)(parseInt(limit), parseInt(offset));
    res.json(response);
});
///createCategory
vechicleCategoryRouter.post('/createCategory', [authJwt_1.parseJwtAdmin], imgUpload_1.upload.array('files'), async (req, res) => {
    const input = req.body;
    const files = req.files;
    const filesUrl = files.map((item) => item.filename);
    const inputData = {
        ...input,
        vehicleImg: filesUrl[0],
    };
    const response = await (0, createCategoryController_1.default)(inputData);
    res.json(response);
});
//editCategory
vechicleCategoryRouter.post('/editCategory', [authJwt_1.parseJwtAdmin], imgUpload_1.upload.array('files'), async (req, res) => {
    const input = req.body;
    const files = req.files;
    let inputData = {};
    if (files) {
        const filesUrl = files.map((item) => item.filename);
        inputData = {
            ...input,
            vehicleImg: filesUrl[0],
        };
    }
    else {
        inputData = {
            ...input,
        };
    }
    const response = await (0, editCategoryController_1.default)(inputData);
    res.json(response);
});
//deleteCategory
vechicleCategoryRouter.post('/deleteCategory', [authJwt_1.parseJwtAdmin], async (req, res) => {
    const id = req.body.id;
    console.log(id, 'idd');
    const response = await (0, deleteCategoryController_1.default)(id);
    res.json(response);
});
exports.default = vechicleCategoryRouter;
//# sourceMappingURL=vehicleCategoryRoutes.js.map