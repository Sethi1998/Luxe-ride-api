"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberPlateExist = exports.vinNumberExist = exports.categoryDoesNotExistsError = exports.categoryAlreadyExistError = void 0;
const vehicleFindOne_1 = require("@/Database/operations/vehicle/vehicleFindOne");
const categoryAlreadyExistError = (category) => {
    if (category) {
        return {
            message: 'Category Name already exist.',
            code: 'false',
        };
    }
};
exports.categoryAlreadyExistError = categoryAlreadyExistError;
const categoryDoesNotExistsError = (category) => {
    if (!category) {
        return {
            message: "Sorry we can't find this Category. Please check and try again.",
            code: 'false',
        };
    }
};
exports.categoryDoesNotExistsError = categoryDoesNotExistsError;
const vinNumberExist = async (input) => {
    const vinNumber = await (0, vehicleFindOne_1.vehicleFindOne)({ vinNumber: input });
    if (vinNumber) {
        return {
            message: 'Vin Number already exist.',
            code: 'false',
        };
    }
};
exports.vinNumberExist = vinNumberExist;
const numberPlateExist = async (plate) => {
    const numberPlate = await (0, vehicleFindOne_1.vehicleFindOne)({ plateNumber: plate });
    if (numberPlate) {
        return {
            message: 'Number Plate already exist.',
            code: 'false',
        };
    }
};
exports.numberPlateExist = numberPlateExist;
//# sourceMappingURL=vehicleCategory.js.map