import dotenv from 'dotenv';
import * as process from "process";
import express from 'express'
import {connectDb} from "@/db";
import {logger} from "@/utils/logger";
import {isRussianIP} from "@/utils/test-ip";
import {startBot} from "@/bot";

dotenv.config();

const startServer = () => {
  const server = express();

  server.listen(process.env.PORT, () => {
    logger.success(`Express Server is running at http://localhost:${process.env.PORT}`)
  })
}

const startApp = async () => {
  try {
    await connectDb();
    await startBot();
    startServer();
  } catch (error) {
    logger.error(error);
  }
}

const prepareAndStart = async () => {
  const isIpRussian = await isRussianIP();

  if (isIpRussian) {
    logger.error(`Can\`t start server. IP-address is Russian. ${new Date().toISOString()}`, 'file')
    throw new Error('Can`t start server. Your`s IP-address is Russian. Please use VPN.');
  } else {
    return startApp();
  }
}

prepareAndStart()
  .then(() => {
    logger.success('All Systems OK, App started', 'log');
    logger.success(`All Systems OK, App started ${new Date().toISOString()}`, 'file');
  })
  .catch((error) => {
    logger.error(error)
  })


