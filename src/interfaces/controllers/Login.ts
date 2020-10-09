import express = require('express');

export class Login {
    login(request: express.Request, response: express.Response) {
        //Seguridad
        //Validar datos necesarios
        //UseCase
        response.status(200);
        response.send("La")
    }
}
