import express = require('express');
import {BadRequest} from "./BadRequest";
import {LoginValidator} from "./validators/LoginValidator";
import {checkSchema, validationResult} from "express-validator";
import ValidatorError from "./ValidatorError";
import {LoginUseCase} from "../../application/use_cases/LoginUseCase";

export const router: express.Router = express.Router();
const loginUseCase: LoginUseCase = new LoginUseCase();
const validatorError: ValidatorError = new ValidatorError();
const badRequest: BadRequest = new BadRequest();

router.post('/login', checkSchema(LoginValidator), async (request: express.Request, response: express.Response) => {
    let errors = validationResult(request)['errors'];
    if (errors && !errors.length) {
        await loginUseCase.loginUseCase(request.body.idNumber, request.body.password, response);
    } else {
        validatorError.sendErrors(errors, response);
    }
});

router.use('/login', (request: express.Request, response: express.Response) => {
    badRequest.badRequest(response);
});
