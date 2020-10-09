import { Model } from "sequelize";
import { Transaction } from "./Transaction";

export class Account extends Model{
    public accountId: string;
    public transactions: Transaction[];
}
