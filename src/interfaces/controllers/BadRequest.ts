import express = require('express');

export class BadRequest {
    badRequest(response: express.Response) {
        response.sendStatus(400);
    }
}
