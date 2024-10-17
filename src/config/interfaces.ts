import { Meta } from './types';

export interface IAppConfig {
    meta: Meta;
    path: string;
    modulator: IModulator;
}

export enum logTypes {
    form = 'form',
    exception = 'exception',
    data = 'data'
}

export enum severityLevels {
    CRITICAL = 'CRITICAL',
    ERROR = 'ERROR',
    WARN = 'WARN',
    INFO = 'INFO',
    DEBUG = 'DEBUG'
}

export interface IModulator {
    activator: boolean;
    severity: severityLevels;
    logType: logTypes[];
}

export interface IAppState {
    meta: Meta;
    path: string;
    modulator: IModulator;
}

export interface IAppData {
    [key: string]: any;
}

export interface IformLog {
    severity: severityLevels;
    logType: logTypes;
    data: string;
    event: string;
    workFlow: {
        name: string;
        component: string;
    };
}
export interface IdataLog {
    severity: severityLevels;
    logType: logTypes;
    data: string;
    workFlow: {
        name: string;
        component: string;
    };
}

export interface IexceptionLog {
    severity: severityLevels;
    logType: logTypes;
    data: string;
    exception: {
        type: string;
        message: string;
        stacktrace: string;
    };
    workFlow: {
        name: string;
        component: string;
    };
}
