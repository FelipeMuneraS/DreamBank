import {DataBase} from '../Sequelize';
import {DataTypes, Model} from 'sequelize';

const dataBaseCon = DataBase.getInstance().getDataBase();

export class AccountModel extends Model {
    public idAccount: string;
    public userNumberId: string;
}

AccountModel.init({
    idAccount: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false
    },
    userNumberId: {
        type: DataTypes.STRING(15),
        primaryKey: true,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Account',
    modelName: 'Account',
    sequelize: dataBaseCon
});