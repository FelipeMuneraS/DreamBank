import express = require('express');
import jwt = require('jsonwebtoken');
import {UserModel} from "../../infrastructure/orm/sequelize/models/UserModel";
import {secretKey} from "../../infrastructure/configuration/Enviroment";



export class LoginUseCase {
    async loginUseCase(idNumber: string, password: string, response: express.Response) {
        let user = await UserModel.findByPk(idNumber);
        if (user && password === user.password) {
            response.status(200);
            let tokenJwt = {
                token: jwt.sign({idNumber: idNumber}, secretKey)
            };
            response.send(tokenJwt);
        } else {
            response.sendStatus(401);
        }
    }
}