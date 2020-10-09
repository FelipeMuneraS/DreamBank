import express = require('express');
import {BadRequest} from "../controllers/BadRequest";
import {Login} from "../controllers/Login";
import {LoginValidator} from "./validators/LoginValidator";
import {body, check, checkSchema, validationResult} from "express-validator";
import ValidatorError from "../controllers/ValidatorError";

export const router: express.Router = express.Router();
const login: Login = new Login();
const badRequest: BadRequest = new BadRequest();
const validatorError: ValidatorError = new ValidatorError();

router.post('/login', checkSchema(LoginValidator), (request: express.Request, response: express.Response) => {
    console.log(request.body);
    let errors = validationResult(request)['errors'];
    console.log(errors);
    if (errors && !errors.length) {
        login.login(request, response);
    } else {
        validatorError.sendErrors(errors, response);
    }
});

router.use('/login', (request: express.Request, response: express.Response) => {
    badRequest.badRequest(response);
});
