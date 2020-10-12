import {DataBase} from '../Sequelize';
import {DataTypes, Model} from 'sequelize';

const dataBaseCon = DataBase.getInstance().getDataBase();

export class UserModel extends Model {
    public idNumber!: string;
    public password!: string;
}

UserModel.init({
    idNumber: {
        type: DataTypes.STRING(15),
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'User',
    modelName: 'User',
    sequelize: dataBaseCon
});