import express = require('express');
import {BadRequest} from "./validators/BadRequest";
import {checkSchema, validationResult} from "express-validator";
import ValidatorError from "./validators/ValidatorError";
import {jwtMiddlewareValidator} from "./validators/JwtMiddlewareValidator";
import {TransactionListValidator} from "./validators/TransactionListValidator";
import {GetTransactionResumeUseCase} from "../../application/use_cases/GetTransactionResumeUseCase";

export const transactionResumeController: express.Router = express.Router();
const badRequest: BadRequest = new BadRequest();
const validatorError: ValidatorError = new ValidatorError();
const getTransactionResumeUseCase: GetTransactionResumeUseCase = new GetTransactionResumeUseCase();

transactionResumeController.post('/getTransactionAverage',
    checkSchema(TransactionListValidator),
    jwtMiddlewareValidator,
    (request: express.Request, response: express.Response) => {
        if (request.body.idNumber == request.body.tokenObject.idNumber) {
            let errors = validationResult(request)['errors'];
            if (errors && !errors.length) {
                getTransactionResumeUseCase.getResume(request.body.idNumber, request.body.idAccount)
                    .then((responseObject) => {
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

transactionResumeController.use('/getTransactionAverage', (request: express.Request, response: express.Response) => {
    badRequest.badRequest(response);
});