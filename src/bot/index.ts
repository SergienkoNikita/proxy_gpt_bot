import {logger} from "@/utils/logger";
import {message} from "telegraf/filters";
import {Telegraf} from "telegraf";
import process from "process";
import {BOT_COMMANDS, MainMenuButton} from "@/bot/constants";
import {start, help} from "@/bot/commands";
import {onMainMenuButtonClick} from "@/bot/keyboards/main";

const bot = new Telegraf(process.env.BOT_TOKEN)
const initBot = async () => {
	await bot.telegram.setMyCommands(BOT_COMMANDS);

	bot.start(start)
	bot.hears([MainMenuButton.FAQ, MainMenuButton.NewChat, MainMenuButton.ChatsList], onMainMenuButtonClick)
	bot.help(help)

	bot.command('time', ctx => ctx.reply(String(new Date())))

	bot.on(message('text'), ctx => {
		ctx.replyWithHTML(
			'<b>bold</b>, <strong>bold</strong>\n' +
			'<i>italic</i>, <em>italic</em>\n' +
			'<u>underline</u>, <ins>underline</ins>\n' +
			'<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>\n' +
			'<span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>\n' +
			'<b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>\n' +
			'<a href="http://www.example.com/">inline URL</a>\n' +
			'<a href="tg://user?id=123456789">inline mention of a user</a>\n' +
			'<tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>\n' +
			'<code>inline fixed-width code</code>\n' +
			'<pre>pre-formatted fixed-width code block</pre>\n' +
			'<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>'
		);
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