import { Markup } from "telegraf";


export const mainMenu = () => Markup.keyboard([
  ['💬 Начать новый чат'],[ "❓FAQ"], ['Кнопка 3']
]).resize()
