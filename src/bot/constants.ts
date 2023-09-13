export enum BotCommand {
	Reset = 'reset',
	Start = 'start',
	DeleteChat = 'delete_chat',
	StartNewChat = 'start_new_chat',
	Help = 'help'
}

export enum MainMenuButton {
	NewChat = '💭 Начать новый чат',
	FAQ = '❓FAQ',
	ChatsList = '💬 Список чатов',
}

export const BOT_COMMANDS: Readonly<{ command: BotCommand, description: string }[]> = [
	{
		command: BotCommand.Reset,
		description: 'Сбросить все настройки, удалить все чаты.'
	},
	{
		command: BotCommand.Start,
		description: 'Начать использовать бота'
	},
	{
		command: BotCommand.DeleteChat,
		description: 'Удалить текущий чат.'
	},
	{
		command: BotCommand.StartNewChat,
		description: 'Начать новый чат.(текущий будет сохранен)'
	},
	{
		command: BotCommand.Help,
		description: 'Помощь'
	}
] as const;