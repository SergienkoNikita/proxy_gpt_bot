import {logger} from "@/utils/logger";
import {userService} from "@/services/user/user.service";
import {mainMenu} from "@/bot/keyboards/main";
import {message} from "telegraf/filters";
import {Telegraf} from "telegraf";
import process from "process";

const bot = new Telegraf(process.env.BOT_TOKEN)
const initBot = async () => {
	await bot.telegram.setMyCommands([
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
}


export const startBot = async () => {
	try {
		await initBot();
		bot.launch().then(() => logger.warning('BOT stopped'))
		logger.success('BOT is Started');
	} catch (error) {
		logger.error(error);
	}
}