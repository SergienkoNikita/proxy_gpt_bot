import dotenv from 'dotenv';
import * as process from "process";
import express from 'express'
import {Telegraf} from "telegraf";
import {message} from "telegraf/filters";
import {mainMenu} from "@/keyboards/main";
import {sequelizeConnection} from "@/db/connection/db-connection";
import {userService} from "@/services/user/user.service";

dotenv.config();

const server = express();
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.telegram.setMyCommands([
  {
    command: 'test',
    description: 'test'
  },
  {
    command: 'reset',
    description: 'reset'
  },
  {
    command: 'time',
    description: 'get current time'
  }
])

bot.start(async (ctx) => {
  const user = await userService.saveIfNeed(ctx.from);

  ctx.reply(`Привет ${user.first_name}`, mainMenu())
})

bot.command('time', ctx => ctx.reply(String(new Date())))
bot.command('time', ctx => ctx.reply(String(new Date())))

bot.on(message('text'), ctx => {
  ctx.reply('just message text')
})

const startSever = async () => {
  console.log(process.env.NODE_ENV)
  try {
    await sequelizeConnection.authenticate();
    await sequelizeConnection.sync();
    console.log('Connection to DB has been established successfully.')
    server.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`)
    })
    bot.launch()
    console.log('BOT is Running')
  } catch (error) {
    console.log(error);
    console.error('Unable to connect to the database:', error);
  }
}

startSever();


