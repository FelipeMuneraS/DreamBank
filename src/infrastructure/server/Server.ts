import express = require('express');
import { dataBase } from "../orm/sequelize/Sequelize";
import { router } from "../../interfaces/routes/Login";

const application: express.Application = express();
const port: number = 3000;

/*dataBase.authenticate()
    .then(() => console.log("DB connected"))
    .catch(() => console.log("Error on connect DB"));*/

application.use(express.json());
application.use(router);

application.listen(port, () => {
    console.log(`App listen on port: ${port}`)
});

