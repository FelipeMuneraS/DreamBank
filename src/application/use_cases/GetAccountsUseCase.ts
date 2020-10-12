import {AccountModel} from "../../infrastructure/orm/sequelize/models/AccountModel";

export class GetAccountsUseCase {
    async getAccounts(idNumber: string): Promise<any> {
        let objectResponse: any;
        let accounts = await AccountModel.findAll({
            where: {
                userNumberId: idNumber
            }
        });
        if (accounts && accounts.length != 0) {
            let idAccountArray = [];
            for (let account of accounts) {
                idAccountArray.push(account.getDataValue('idAccount'));
            }
            objectResponse = { accounts: idAccountArray};
        } else {
            objectResponse = { error: "You dont have accounts"};
        }
        return objectResponse;
    }
}