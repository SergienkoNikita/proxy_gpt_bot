import {sequelizeConnection} from "@/db/db-connection";
import {logger} from "@/utils/logger";

export const connectDb = async () => {
    try {
        await sequelizeConnection.authenticate();
        await sequelizeConnection.sync();
        logger.success('Connection to DB has been established successfully.')
    } catch (error) {
        logger.error('Failed DB connection');
        throw new Error();
    }
}