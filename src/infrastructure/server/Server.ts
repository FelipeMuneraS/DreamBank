import express = require('express');
import {router} from "../../interfaces/controllers/LoginController";

const application: express.Application = express();
const port: number = 3000;

application.use(express.json());
application.use(router);

application.listen(port, () => {
    console.log(`App listen on port: ${port}`)
});

