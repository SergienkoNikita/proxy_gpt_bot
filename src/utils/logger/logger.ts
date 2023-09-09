import * as fs from "fs";
import {
	LoggerMessage,
	LoggerLogType,
	LoggerTarget,
} from './types'
import {
	LOG_TYPE,
	MESSAGE_BG_COLORS,
	MESSAGE_COLORS,
	MESSAGE_STYLE, OTHER_COLORS,
} from "@/utils/logger/constants";
import * as path from "path";
import * as process from "process";


class Logger {
	logFilePath: string;

	static createLogText(): string {
		return `\n\n\n\n\n${'- '.repeat(100)}\n  - Logger started in: ${new Date().toISOString()}\n${'- '.repeat(100)}\n`
	}

	constructor() {
		this.logFilePath = path.resolve(__dirname, `../../../logs/${process.env.NODE_ENV}.log`)

		try {
			fs.statSync(this.logFilePath);
			fs.appendFileSync(
				this.logFilePath,
				Logger.createLogText()
			)
		} catch (error) {
			fs.writeFileSync(
				this.logFilePath,
				Logger.createLogText()
			)
		}
	}

	private formattedMessageForFile(message: LoggerMessage): string {
		if (typeof message === 'string' || typeof message === 'number') {
			return `${message}`
		} else if (message instanceof Error) {
			return `${message.toString()}`
		} else {
			return `${JSON.stringify(message)}`
		}
	}

	private getMessageForFile(message: LoggerMessage, logType: LoggerLogType): string {
		return `\n\n${logType.toLocaleUpperCase()}: (${new Date().toLocaleString()}): ${this.formattedMessageForFile(message)} (${typeof message})\n${'_ '.repeat(100)}`
	}

	private logToFile(
		message: LoggerMessage,
		logType: LoggerLogType,
	): void {
		fs.appendFileSync(
			this.logFilePath,
			this.getMessageForFile(message, logType)
		)
	}

	private addLogMessage(message: LoggerMessage, target: LoggerTarget, type: LoggerLogType) {
		if (target === 'log' || target === 'full') {
			const fn = console[type] ? console[type] : console.log;


			fn(
				MESSAGE_COLORS[type],
				MESSAGE_BG_COLORS[type],
				MESSAGE_STYLE.bold,
				`${type.toLocaleUpperCase()}:`,
				OTHER_COLORS.black,
				new Date().toLocaleString(),
				MESSAGE_STYLE.reset,
				message,
				MESSAGE_STYLE.reset
			)
		}

		if (target === 'file' || target === 'full') {
			this.logToFile(message, type)
		}
	}

	public info(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'full', LOG_TYPE.info)
	}

	public warning(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'full', LOG_TYPE.warning)
	}

	public debug(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'full', LOG_TYPE.debug)
	}

	public error(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'full', LOG_TYPE.error)
	}

	public success(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'full', LOG_TYPE.success)
	}
}

export const logger = new Logger();