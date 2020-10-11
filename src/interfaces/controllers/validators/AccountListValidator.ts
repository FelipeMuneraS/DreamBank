import { Schema } from "express-validator";

export const AccountListValidator: Schema = {
    idNumber: {
        in: "body",
        errorMessage: "idNumber is required",
        isLength: {
            options: {
                min: 5,
                max: 15
            }
        }
    }
}
