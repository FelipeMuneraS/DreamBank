import redis = require('redis');
import jwtWithRedisDefault = require('jwt-redis');
import JWTRedis from "jwt-redis";
import {redisHost, redisPassword, redisPort} from "../configuration/Enviroment";

export class JwtWithRedis {
    private static instance: JwtWithRedis;
    private readonly jwtWithRedis: JWTRedis;

    constructor() {
        let redisClient = redis.createClient({
            host: redisHost,
            port: Number(redisPort),
            auth_pass: redisPassword
        });
        redisClient.on("error", error => {
            console.error(error);
        });
        this.jwtWithRedis = new jwtWithRedisDefault.default(redisClient);
    }

    public static getInstance() {
        if (!JwtWithRedis.instance) {
            JwtWithRedis.instance = new JwtWithRedis();
        }
        return JwtWithRedis.instance;
    }

    public getJwtWithRedis() {
        return this.jwtWithRedis;
    }

}