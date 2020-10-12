import express = require('express');
import {BadRequest} from "./validators/BadRequest";
import {jwtMiddlewareValidator} from "./validators/JwtMiddlewareValidator";
import {GetAccountsUseCase} from "../../application/use_cases/GetAccountsUseCase";
import {checkSchema, validationResult} from "express-validator";
import {AccountListValidator} from "./validators/AccountListValidator";
import ValidatorError from "./validators/ValidatorError";


export const accountListController: express.Router = express.Router();
const badRequest: BadRequest = new BadRequest();
const validatorError: ValidatorError = new ValidatorError();
const getAccountsUseCase: GetAccountsUseCase = new GetAccountsUseCase();

accountListController.post('/getAccounts',
    checkSchema(AccountListValidator),
    jwtMiddlewareValidator,
    (request: express.Request, response: express.Response) => {
        if (request.body.idNumber == request.body.tokenObject.idNumber) {
            let errors = validationResult(request)['errors'];
            if (errors && !errors.length) {
                getAccountsUseCase.getAccounts(request.body.idNumber).then((responseObject) => {
                    response.setHeader('authorization', 'Bearer ' + request.body.tokenObject.newToken);
                    response.status(200);
                    response.send(responseObject);
                });
            } else {
                validatorError.sendErrors(errors, response);
            }
        } else {
            response.sendStatus(401);
        }
    }
);


accountListController.use('/getAccounts', (request: express.Request, response: express.Response) => {
    badRequest.badRequest(response);
});