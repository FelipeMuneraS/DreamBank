import { Sequelize } from 'sequelize';
import {
    dataBaseHost,
    dataBaseName,
    dataBasePassword,
    dataBasePort,
    dataBaseUser
} from '../../configuration/Enviroment'

export class DataBase {
    private static instance: DataBase
    private readonly dataBase: Sequelize;

    constructor() {
        this.dataBase = new Sequelize(dataBaseName,
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
                },
                logging: false
            });
        this.dataBase.authenticate().then(async () => {
            console.log("DB connected")
        }).catch((error) => console.error(error));
    }

    public static getInstance() {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }

    public getDataBase() {
        return this.dataBase;
    }
}
