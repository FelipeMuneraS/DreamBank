import { Schema } from "express-validator";

export const LoginValidator: Schema = {
    numberId: {
        errorMessage: "numberId is required",
        isLength: {
            options: {
                min: 5,
                max: 20
            }
        },
        isEmpty: true
    },
    password: {
        errorMessage: "password is required",
        isLength: {
            options: { min: 1, max: 20 }
        },
        isEmpty: true
    }
}
