import express = require('express');

export default class ValidatorError {

    public sendErrors(errors: any, response: express.Response) {
        let message = [];
        for (let error of errors) {
            message.push(error['msg']);
        }
        response.status(400);
        response.send(message);
    }
}
