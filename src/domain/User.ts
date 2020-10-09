import { Account } from './Account';
import { ProductRequest } from "./ProductRequest";

export default class User {
    numberId: string;
    password: string;
    accounts: Account[];
    productRequest: ProductRequest[];
}
