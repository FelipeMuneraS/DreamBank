import {UserModel} from '../../infrastructure/orm/sequelize/models/UserModel';
import {ProductRequesModel} from '../../infrastructure/orm/sequelize/models/ProductRequesModel';
import {v4 as uuid} from 'uuid';

export class CreateProductUseCase {
    async create(idNumber: string, type: string): Promise<any>{
        let responseObject: any;
        let idRequest: string;
        let user = await UserModel.findByPk(idNumber);
        if (user) {
            idRequest = uuid();
            await ProductRequesModel.create({
                idProductRequest: idRequest,
                type: type,
                userIdNumber: idNumber,
                state: 'Pending'
            });
            responseObject = {idRequest: idRequest};
        }
        return responseObject;
    }
}