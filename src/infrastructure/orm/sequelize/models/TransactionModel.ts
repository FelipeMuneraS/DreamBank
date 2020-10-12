import {DataTypes, Model} from "sequelize";
import {DataBase} from "../Sequelize";

const dataBaseCon = DataBase.getInstance().getDataBase();

export class TransactionModel extends Model {
    public idTransaction: string;
    public businessCommerce: string;
    public amount: number;
    public state: string;
    public date: string;
    public time: string;
    public accountIdAccount: string;
    public productRequestIdProductRequest: string;
    public userIdNumber: string;
}

TransactionModel.init({
        idTransaction: {
            type: DataTypes.STRING(100),
            primaryKey: true,
            allowNull: false
        },
        businessCommerce: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        accountIdAccount: {
            type: DataTypes.STRING(40),
            primaryKey: true,
            allowNull: false
        },
        productRequestIdProductRequest: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        userIdNumber: {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'Transaction',
        modelName: 'Transaction',
        sequelize: dataBaseCon
    }
);