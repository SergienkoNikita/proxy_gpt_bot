import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import * as process from "process";

dotenv.config();

export const sequelizeConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
  },
);
