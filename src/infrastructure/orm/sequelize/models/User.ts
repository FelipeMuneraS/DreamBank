import { Model } from "sequelize";
import { Account } from './Account';
import { ProductRequest } from "./ProductRequest";

export default class User extends Model{
    numberId: string;
    password: string;
    accounts: Account[];
    productRequest: ProductRequest[];
}
