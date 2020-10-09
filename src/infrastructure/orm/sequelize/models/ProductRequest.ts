import { Transaction } from "./Transaction";

export class ProductRequest{
    productRequestdId: string;
    type: string;
    transactions: Transaction[];
}
