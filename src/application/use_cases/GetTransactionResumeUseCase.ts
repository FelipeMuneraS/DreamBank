import {TransactionModel} from '../../infrastructure/orm/sequelize/models/TransactionModel';

export class GetTransactionResumeUseCase {
    async getResume(idNumber: string, idAccount: string): Promise<any> {
        let objectResponse: any;
        let transactions = await TransactionModel.findAll({
            where: {
                userIdNumber: idNumber,
                accountIdAccount: idAccount
            }
        });
        if (transactions && transactions.length != 0) {
            let transactionAverage = 0;
            for (let transaction of transactions) {
                transactionAverage += transaction.getDataValue('amount');
            }
            transactionAverage = transactionAverage / transactions.length;
            objectResponse = {transactionAverage: transactionAverage};
        } else {
            objectResponse = {error: 'You dont have transactions'};
        }
        return objectResponse;
    }
}