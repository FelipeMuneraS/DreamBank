import {Model} from "sequelize";

export class Transaction extends Model {
    public idTransaction: string;
    public businessCommerce: string;
    public amount: number;
    public state: string;
    public date: string;
    public time: string;
    public accountIdAccount: string;
    public productRequestIdProductRequest: string;
}
