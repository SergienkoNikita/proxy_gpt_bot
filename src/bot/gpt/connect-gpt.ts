import process from "process";
import dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();
export const connectGpt = async () => {
	const openai = new OpenAI({
		apiKey: process.env.GPT_API_KEY,
	})

	return openai
	// const res = await openai.chat.completions.create({
	// 	messages: [{ role: "user", content: "Привет GPT!! Меня зовут Никита" }],
	// 	model: "gpt-3.5-turbo",
	// });
	//
	// console.log(res.choices[0]?.message.content);
	//
	// const res2 = await openai.chat.completions.create({
	// 	messages: [
	// 		{ role: "user", content: "Привет GPT! Меня зовут Никита" },
	// 		{ role: res.choices[0]?.message.role ?? "assistant", content: res.choices[0]?.message.content ?? ''},
	// 		{ role: "user", content: "Как меня зовут? Ответь с тегами для телеграмм сообщения." }],
	// 	model: "gpt-3.5-turbo",
	// });
	//
	// console.log(res2.choices[0]?.message.content);
}