import { Model } from "sequelize";

export class Transaction extends Model{
    public transactionId: string;
    public businessCommerce: string;
    public amount: number;
    public state: string;
    public date: Date;
}
