import express = require('express');

import {UserModel} from '../../infrastructure/orm/sequelize/models/UserModel';
import {secretKey} from '../../infrastructure/configuration/Enviroment';
import {JwtWithRedis} from '../../infrastructure/security/JwtWithRedis';
import JWTRedis from 'jwt-redis';
import {jwtOptions} from '../../infrastructure/configuration/Constants';

const jwtWithRedis: JWTRedis = JwtWithRedis.getInstance().getJwtWithRedis();

export class LoginUseCase {
    async loginUseCase(idNumber: string, password: string, response: express.Response) {
        let user = await UserModel.findByPk(idNumber);
        if (user && password === user.password) {
            response.status(200);
            let tokenJwt = {
                token: await jwtWithRedis.sign({idNumber: idNumber}, secretKey, jwtOptions)
            };
            response.json(tokenJwt);
        } else {
            response.sendStatus(401);
        }
    }
}