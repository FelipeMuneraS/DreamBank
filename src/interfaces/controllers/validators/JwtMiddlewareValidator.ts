import express = require('express');
import JWTRedis from "jwt-redis";
import {JwtWithRedis} from "../../../infrastructure/security/JwtWithRedis";
import {secretKey} from "../../../infrastructure/configuration/Enviroment";

export const jwtMiddlewareValidator: express.Router = express.Router();
const jwtWithRedis: JWTRedis = JwtWithRedis.getInstance().getJwtWithRedis();


jwtMiddlewareValidator.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
    let token: string;
    if (request.headers['authorization']) {
        token = request.headers['authorization'].split(' ')[1];
    } else {
        token = 'error';
    }
    if (token) {
        jwtWithRedis.verify(token, secretKey).then( async (tokenObject: any) => {
            let newToken = await jwtWithRedis.sign({idNumber: tokenObject.idNumber}, secretKey);
            await jwtWithRedis.destroy(tokenObject.jti);
            response.setHeader('authorization', 'Bearer ' + newToken);
            tokenObject.newToken = newToken;
            request.body.tokenObject = tokenObject;
            next();
        }).catch((error) => {
            console.error(error);
            response.sendStatus(401);
        });
    } else {
        console.log("401");
        response.sendStatus(401);
    }
});


