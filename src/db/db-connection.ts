import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
import * as process from "process";

interface DbConfig {
  name: string;
  user: string;
  password: string;
  host: string;
  dialect: Dialect;
}

dotenv.config();

const config: DbConfig = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: `${process.env.DB_HOST}:${process.env.DB_PORT}`,
  dialect: 'postgres',
}

export const sequelizeConnection = new Sequelize(
  'bot_local',
  'nikita',
  '123456',
  {
    host: 'localhost',
    port: 5432,
    dialect: config.dialect,
  },
);
