import { appState } from '../app';
import { IdataLog, IexceptionLog, IformLog } from '../config/interfaces';
import { buildLogMessage } from './commonUtils';

export function formLog(logObject: IformLog) {
    if (appState.getAppState().modulator.activator) {
        buildLogMessage(logObject);
    }
}

export function dataLog(logObject: IdataLog) {
    if (appState.getAppState().modulator.activator) {
        buildLogMessage(logObject);
    }
}

export function exceptionLog(logObject: IexceptionLog) {
    if (appState.getAppState().modulator.activator) {
        buildLogMessage(logObject);
    }
}
