import {LoggerLogType} from '@/utils/logger/types';

export const LOG_TYPE: Readonly<Record<LoggerLogType, LoggerLogType>> = {
	info: 'info',
	error: 'error',
	success: 'success',
	warning: 'warning',
	debug: 'debug',
} as const;

export const MESSAGE_COLORS = {
	[LOG_TYPE.error]: '\x1b[31m',
	[LOG_TYPE.success]: '\x1b[32m',
	[LOG_TYPE.warning]: '\x1b[33m',
	[LOG_TYPE.info]: '\x1b[37m',
	[LOG_TYPE.debug]: '\x1b[34m',
} as const;

export const MESSAGE_BG_COLORS = {
	[LOG_TYPE.error] : '\x1b[41m',
	[LOG_TYPE.success] : '\x1b[42m',
	[LOG_TYPE.warning] : '\x1b[43m',
	[LOG_TYPE.debug]: '\x1b[44m',
	[LOG_TYPE.info]: '\x1b[45m',
} as const;

export const MESSAGE_STYLE = {
	bold: '\x1b[1m',
	light: '\x1b[2m',
	underline: '\x1b[4m',
	whiteBg: '\x1b[7m',
	reset : '\x1b[0m',
} as const;

export const OTHER_COLORS = {
	red: '\x1b[31m',
	black: '\x1b[30m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
} as const;

export const OTHER_BG_COLORS = {
	black : '\x1b[40m',
	magenta : '\x1b[45m',
	cyan : '\x1b[46m',
	white : '\x1b[47m',
} as const;