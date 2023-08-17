import { Markup } from "telegraf";


export const mainMenu = () => Markup.keyboard([
  ['Кнопка 1', "Кнопка 2"], ['Кнопка 3']
]).resize()
