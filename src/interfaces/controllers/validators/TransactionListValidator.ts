import { Schema } from "express-validator";

export const TransactionListValidator: Schema = {
    idNumber: {
        in: "body",
        errorMessage: "idNumber is required",
        isLength: {
            options: {
                min: 1,
                max: 15
            }
        }
    },
    idAccount: {
        in: "body",
        errorMessage: "idAccount is required",
        isLength: {
            options: { min: 1, max: 40 }
        }
    }
}
