import express = require('express');
import {BadRequest} from './validators/BadRequest';
import {jwtMiddlewareValidator} from './validators/JwtMiddlewareValidator';
import {checkSchema, validationResult} from 'express-validator';
import {AccountListValidator} from './validators/AccountListValidator';
import ValidatorError from './validators/ValidatorError';
import {CreateProductUseCase} from '../../application/use_cases/CreateProductUseCase';


export const newProductController: express.Router = express.Router();
const badRequest: BadRequest = new BadRequest();
const validatorError: ValidatorError = new ValidatorError();
const createProductUseCase: CreateProductUseCase = new CreateProductUseCase();
const types = ['1', '2', '3', '4'];

newProductController.post('/newProduct',
    checkSchema(AccountListValidator),
    jwtMiddlewareValidator,
    (request: express.Request, response: express.Response) => {
        if (request.body.idNumber == request.body.tokenObject.idNumber) {
            let errors = validationResult(request)['errors'];
            if (errors && !errors.length) {
                if (types.includes(request.body.type)) {
                    createProductUseCase.create(request.body.idNumber, request.body.type).then((responseObject) => {
                        response.setHeader('authorization', 'Bearer ' + request.body.tokenObject.newToken);
                        response.send(responseObject);
                    });
                } else {
                    response.sendStatus(400);
                }
            } else {
                validatorError.sendErrors(errors, response);
            }
        } else {
            response.sendStatus(401);
        }
    }
);


newProductController.use('/newProduct', (request: express.Request, response: express.Response) => {
    badRequest.badRequest(response);
});