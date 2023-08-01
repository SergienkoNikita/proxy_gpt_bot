import dotenv from 'dotenv';
import * as process from "process";
import express from 'express'
import {Telegraf} from "telegraf";

dotenv.config();

const server = express();
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
  ctx.reply('Welcome, bro')
})

bot.command('time', ctx => ctx.reply(String(new Date())))

bot.on('text', ctx => {
  ctx.reply('just text')
})

bot.launch()

server.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`)
})
