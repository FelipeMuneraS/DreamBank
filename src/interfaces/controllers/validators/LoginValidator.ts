import { Schema } from "express-validator";

export const LoginValidator: Schema = {
    idNumber: {
        in: "body",
        errorMessage: "idNumber is required",
        isLength: {
            options: {
                min: 5,
                max: 20
            }
        }
    },
    password: {
        in: "body",
        errorMessage: "password is required",
        isLength: {
            options: { min: 1, max: 20 }
        }
    }
}
