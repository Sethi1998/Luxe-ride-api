"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJwtAdmin = exports.parseJwt = exports.checkToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = (user, signOptions = { expiresIn: '30d' }) => {
    const token = jsonwebtoken_1.default.sign({
        user: {
            _id: user._id,
            email: user.email,
            role: user.role,
        },
    }, process.env.JWT_TOKEN_SECRET, signOptions);
    return token;
};
exports.signToken = signToken;
const checkToken = (token) => {
    return jsonwebtoken_1.default.verify(token, process.env.JWT_TOKEN_SECRET);
};
exports.checkToken = checkToken;
const parseJwt = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        res.send('Please Provide Authorization token');
    }
    const token = authorizationHeader.replace('Bearer ', '');
    try {
        const jwtData = (0, exports.checkToken)(token);
        if (jwtData && jwtData.user) {
            req.user = jwtData.user;
            next();
        }
        else {
            console.log('not authorised');
            // authLogger.debug('Token was not authorized', { token });
        }
    }
    catch (err) {
        console.log('err', err);
    }
};
exports.parseJwt = parseJwt;
const parseJwtAdmin = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        res.send('Please Provide Authorization token');
    }
    const token = authorizationHeader.replace('Bearer ', '');
    try {
        const jwtData = (0, exports.checkToken)(token);
        if (jwtData && jwtData.user.role === 'admin') {
            req.user = jwtData.user;
            next();
        }
        else {
            console.log('not authorised');
            res.send(`You dont't have rights`);
            // authLogger.debug('Token was not authorized', { token });
        }
    }
    catch (err) {
        console.log('err', err);
    }
};
exports.parseJwtAdmin = parseJwtAdmin;
//# sourceMappingURL=authJwt.js.map