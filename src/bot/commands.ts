import {Context} from 'telegraf/';
import {userService} from "@/services/user/user.service";
import {mainMenu} from "@/bot/keyboards/main";

export const start = async (ctx: Context) => {
	const user = await userService.saveIfNeed(ctx.from);

	return ctx.reply(`Привет ${user.first_name}`, mainMenu())
}

export const help = (ctx: Context) => {
	return ctx.replyWithHTML(
		'<tg-emoji emoji-id="5368">❓</tg-emoji><b>FAQ</b><tg-emoji emoji-id="5368">❓</tg-emoji>\n\n'+
		'<i>На данный момент бот умеет работать только с текстом. </i>' +
		'<i>Так-же как и обычный чат с GPT-3 - бот запоминает историю сообщений</i>'+
		'<i>И умеет хранить несколько чатов</i>\n\n\n'+
		'<b>Так как используется бесплатная версия GPT, существует пару ограничений: \n\n'+
		'<tg-emoji emoji-id="7123">1️⃣</tg-emoji>️ Ограничение на 3 запроса в минуту.</b>\n\n<i>Не переживай если бот попросил подождать, или спросить попозже' +
		' возможно ты уперся в лимит<tg-emoji emoji-id="71202286">☺️</tg-emoji></i>\n\n' +
		'<b><tg-emoji emoji-id="8">2️⃣</tg-emoji> Ограничение на количество чатов. </b>' +
		'\n\n<i>Ты можешь одновременно вести 5 диалогов, если нужно создать новый чат - просто удали какой-либо из списка</i>\n\n\n' +
		'<b><tg-emoji emoji-id="9">❔</tg-emoji> Как начать диалог с GPT</b>\n\n'+
		'<i>Чтобы начать новый Чат с GPT - нажми:\n"💭 Начать новый чат" в скрывающемся меню</i>\n\n'+
		'<b><tg-emoji emoji-id="9">❔</tg-emoji> Как удалить диалог?</b>\n\n'+
		'<i>Нажми - "💬 Список чатов", и тапни кнопку удалить на нужном чате.</i>\n\n' +
		'<b><tg-emoji emoji-id="9">❔</tg-emoji> Куда обратиться если я нашел/нашла ошибку, или хочу предложить функционал?</b>\n\n' +
		'<i>Пиши мне в телеграмм <tg-emoji emoji-id="71202286">☺️</tg-emoji>- <a href="tg://user?id=905894338">@sNikita77</a>\n</i>'
	)
}