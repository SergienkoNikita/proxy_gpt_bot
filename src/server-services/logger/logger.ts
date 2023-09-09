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
	MESSAGE_STYLE,
} from "@/server-services/logger/constants";
import * as path from "path";
import * as process from "process";


class Logger {
	logFilePath: string;

	static createLogText(): string {
		return `\n\n\n\n\n${'$'.repeat(100)}\nServer started in: ${new Date().toJSON()}\n${'$'.repeat(100)}\n`
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

	private logToFile(
		message: LoggerMessage,
		logType: LoggerLogType,
	): void {
		if (typeof message === 'string' || typeof message === 'number') {
			fs.appendFileSync(
				this.logFilePath,
				`\n${logType.toLocaleUpperCase()}: ${message} (${typeof message})\n${'-'.repeat(100)}`
			)
		} else if (message instanceof Error) {
			fs.appendFileSync(
				this.logFilePath,
				`\n${logType.toLocaleUpperCase()}: ${message.toString()} (${typeof message})\n${'-'.repeat(100)}`
			)
		} else {
			fs.appendFileSync(
				this.logFilePath,
				`\n${logType.toLocaleUpperCase()}: ${JSON.stringify(message)} (${typeof message})\n${'-'.repeat(100)}`
			)
		}
	}

	private addLogMessage(message: LoggerMessage, target: LoggerTarget, type: LoggerLogType) {
		if (target === 'log' || target === 'full') {
			const fn = console[type] ? console[type] : console.log;

			if (type === 'info') console.log('here')
			fn(
				MESSAGE_COLORS[type],
				MESSAGE_BG_COLORS[type],
				MESSAGE_STYLE.bold,
				`${type.toLocaleUpperCase()}:`,
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
		this.addLogMessage(message, target ?? 'log', LOG_TYPE.info)
	}

	public warning(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'log', LOG_TYPE.warning)
	}

	public debug(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'log', LOG_TYPE.debug)
	}

	public error(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'log', LOG_TYPE.error)
	}

	public success(message: LoggerMessage, target?: LoggerTarget): void {
		this.addLogMessage(message, target ?? 'log', LOG_TYPE.success)
	}
}

export const logger = new Logger();