import { Markup } from "telegraf";
import { MainMenuButton } from "@/bot/constants";
import {Context} from "telegraf/";
import {help} from "@/bot/commands";

export const mainMenu = (hasChats: boolean = false) => {
  const menuButtons: [[MainMenuButton], [MainMenuButton]] | [[MainMenuButton], [MainMenuButton, MainMenuButton]] = [
    [MainMenuButton.NewChat],[MainMenuButton.FAQ],
  ]

  if (hasChats) menuButtons[1].push(MainMenuButton.ChatsList)

  return Markup.keyboard(menuButtons).resize()
}

export const onMainMenuButtonClick = (ctx: Context, next) => {
  if(!('text' in ctx.message)) return next()
  if (ctx.message.text as MainMenuButton === MainMenuButton.FAQ) {
    return help(ctx);
  }
}
