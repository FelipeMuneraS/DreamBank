import { Sequelize } from 'sequelize';
import {
    dataBaseHost,
    dataBaseName,
    dataBasePassword,
    dataBasePort,
    dataBaseUser
} from '../../configuration/Enviroment'

export const dataBase = new Sequelize(
    dataBaseName,
    dataBaseUser,
    dataBasePassword,
    {
        port: Number(dataBasePort),
        host: dataBaseHost,
        dialect: 'mysql',
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        }
    }
)
