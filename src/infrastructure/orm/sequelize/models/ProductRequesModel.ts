import {DataBase} from '../Sequelize';
import {DataTypes, Model} from 'sequelize';

const dataBaseCon = DataBase.getInstance().getDataBase();

export class ProductRequesModel extends Model {
    idProductRequest: string;
    type: string;
    userIdNumber: string;
}

ProductRequesModel.init({
        idProductRequest: {
            type: DataTypes.STRING(40),
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        userIdNumber: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'ProductRequest',
        modelName: 'ProductRequest',
        sequelize: dataBaseCon
    }
);
