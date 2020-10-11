import express = require('express');
import {BadRequest} from "./validators/BadRequest";
import {LoginValidator} from "./validators/LoginValidator";
import {checkSchema, validationResult} from "express-validator";
import ValidatorError from "./validators/ValidatorError";
import {LoginUseCase} from "../../application/use_cases/LoginUseCase";

export const loginController: express.Router = express.Router();
const loginUseCase: LoginUseCase = new LoginUseCase();
const validatorError: ValidatorError = new ValidatorError();
const badRequest: BadRequest = new BadRequest();

loginController.post('/login', checkSchema(LoginValidator), (request: express.Request, response: express.Response) => {
    let errors = validationResult(request)['errors'];
    if (errors && !errors.length) {
        loginUseCase.loginUseCase(request.body.idNumber, request.body.password, response)
            .then(() => response.send());
    } else {
        validatorError.sendErrors(errors, response);
    }
});

loginController.use('/login', (request: express.Request, response: express.Response) => {
    badRequest.badRequest(response);
});
