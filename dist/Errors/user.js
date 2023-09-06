"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPasswordValid = exports.userAlreadyExistError = exports.userDoesNotExistsError = exports.isValidPasswordError = exports.isValidEmailError = exports.checkPasswordPolicies = void 0;
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const isEmail = (string) => {
    const isEmailRegExp = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    return isEmailRegExp.test(string);
};
const schema = joi_1.default.string()
    .required()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
    .error((errors) => {
    errors.forEach((err) => {
        switch (err.type) {
            case 'string.regex.base':
                err.message =
                    'At least one lower case (a-z), one upper case (A-Z) and number (0-9)';
                break;
            case 'string.min':
                err.message = 'Password is too short - should be 8 chars minimum.';
        }
    });
    return errors;
});
const checkPasswordPolicies = (password) => {
    const { error } = schema.validate(password);
    return !error;
};
exports.checkPasswordPolicies = checkPasswordPolicies;
// Check if valid email string.
const isValidEmailError = (email) => {
    if (!isEmail(email)) {
        return {
            message: 'This is not a valid email',
            code: 'false',
        };
    }
};
exports.isValidEmailError = isValidEmailError;
// Check if valid password string.
const isValidPasswordError = (password) => {
    if (!(0, exports.checkPasswordPolicies)(password)) {
        return {
            message: 'Minimum 8 characters with at least one uppercase, lowercase, numeric and special characters.',
            code: 'true',
        };
    }
};
exports.isValidPasswordError = isValidPasswordError;
// Check if user exists in the datababse.
const userDoesNotExistsError = (user) => {
    if (!user) {
        return {
            message: "Sorry we can't find this email. Please check and try again.",
            code: 'false',
        };
    }
};
exports.userDoesNotExistsError = userDoesNotExistsError;
const userAlreadyExistError = (user) => {
    if (user) {
        return {
            message: 'Email already exist.',
            code: 'false',
        };
    }
};
exports.userAlreadyExistError = userAlreadyExistError;
const isPasswordValid = (password, dbPassword) => {
    const valid = bcrypt_1.default.compareSync(password, dbPassword);
    if (!valid) {
        return {
            message: 'Sorry the password you have entered is incorrect.',
            code: 'INVALID_PASSWORD',
        };
    }
};
exports.isPasswordValid = isPasswordValid;
//# sourceMappingURL=user.js.map