import { Schema } from 'express-validator';

export const CreateProductValidator: Schema = {
    idNumber: {
        in: 'body',
        errorMessage: 'idNumber is required',
        isLength: {
            options: {
                min: 5,
                max: 15
            }
        }
    },
    type: {
        in: 'body',
        errorMessage: 'type is required',
        isLength: {
            options: {
                min: 1,
                max: 3
            }
        },

    }
}
