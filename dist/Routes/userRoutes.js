"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUserController_1 = __importDefault(require("@/Controllers/user/getAllUserController"));
const loginController_1 = __importDefault(require("@/Controllers/user/loginController"));
const signupController_1 = __importDefault(require("@/Controllers/user/signupController"));
const updateUserController_1 = __importDefault(require("@/Controllers/user/updateUserController"));
const authJwt_1 = require("@/services/authJwt");
const express_1 = __importDefault(require("express"));
const findOne_1 = __importDefault(require("@/Database/operations/User/findOne"));
const userRouter = express_1.default.Router();
//getUserInfo
userRouter.get('/getUser', [authJwt_1.parseJwt], async (req, res) => {
    const id = req.user._id;
    if (!id)
        return null;
    const user = await (0, findOne_1.default)({ _id: id });
    res.json(user);
});
//getAdminInfo
userRouter.get('/getAdmin', [authJwt_1.parseJwtAdmin], async (req, res) => {
    const id = req.user._id;
    if (!id)
        return null;
    const user = await (0, findOne_1.default)({ _id: id });
    res.json(user);
});
// getAllUser
userRouter.get('/getUsers', [authJwt_1.parseJwt], async (req, res) => {
    const input = req.query.filter;
    const limit = req.query.limit;
    const offset = req.query.offset;
    const users = await (0, getAllUserController_1.default)(parseInt(limit), parseInt(offset), input);
    res.json(users);
});
//registerUser
userRouter.post('/signup', async (req, res) => {
    const input = req.body;
    const response = await (0, signupController_1.default)(input);
    res.json(response);
});
//loginUser
userRouter.post('/login', async (req, res) => {
    const input = req.body;
    const response = await (0, loginController_1.default)(input);
    res.json(response);
});
//loginAdmin
userRouter.post('/adminlogin', async (req, res) => {
    const input = req.body;
    const response = await (0, loginController_1.default)(input);
    res.json(response);
});
//updateuser
userRouter.post('/updateUser', [authJwt_1.parseJwt], async (req, res) => {
    const user = req.user;
    const input = req.body;
    const response = await (0, updateUserController_1.default)(user, input);
    res.json(response);
});
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map