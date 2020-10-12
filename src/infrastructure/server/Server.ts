import express = require('express');
import {loginController} from '../../interfaces/controllers/LoginController';
import {accountListController} from '../../interfaces/controllers/AccountListController';
import {transactionListController} from '../../interfaces/controllers/TransactionListController';
import {transactionResumeController} from '../../interfaces/controllers/TransactionResumeController';
import {newProductController} from '../../interfaces/controllers/NewProductController';

const application: express.Application = express();
const port: string | number = process.env.PORT || 3000;

application.use(express.json());
application.use(loginController);
application.use(accountListController);
application.use(transactionListController);
application.use(transactionResumeController);
application.use(newProductController);

application.listen(port, () => {
    console.log(`App listen on port: ${port}`)
});

