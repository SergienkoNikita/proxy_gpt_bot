export type LoggerMessage = string | number | Error | Record<string, unknown> | unknown[];

export type LoggerTarget = 'log' | 'file' | 'full';

export type LoggerLogType = 'error' | 'success' | 'warning' | 'info' | 'debug';