import {sequelizeConnection} from "@/db/connection/db-connection";

export const connectDb = async () => {
    try {
        await sequelizeConnection.authenticate();
        await sequelizeConnection.sync();
    } catch (error) {
        console.error('Failed DB connection')
    }
}