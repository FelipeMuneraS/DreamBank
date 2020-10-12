import {AccountModel} from "../../infrastructure/orm/sequelize/models/AccountModel";
import {TransactionModel} from "../../infrastructure/orm/sequelize/models/TransactionModel";

export class GetTransactionsUseCase {
    async getTransactions(idNumber: string, idAccount: string): Promise<any> {
        let objectResponse: any;
        let transactions = await TransactionModel.findAll({
            where: {
                userIdNumber: idNumber,
                accountIdAccount: idAccount
            }
        });
        if (transactions && transactions.length != 0) {
            let transactionArray = [];
            for (let transaction of transactions) {
                transactionArray.push({
                    businessCommerce: transaction.getDataValue('businessCommerce'),
                    amount: transaction.getDataValue('amount'),
                    state: transaction.getDataValue('state'),
                    date: transaction.getDataValue('date'),
                    time: transaction.getDataValue('time')
                });
            }
            objectResponse = { transactions: transactionArray};
        } else {
            objectResponse = { error: "You dont have transactions"};
        }
        return objectResponse;
    }
}