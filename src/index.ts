import { appState } from './app';
import { IAppConfig } from './config/interfaces';
import { formLog, exceptionLog, dataLog } from './utils/logsFormat';

const initState = (appConfig: IAppConfig) => {
    appState.setAppState(appConfig);
};

export const logger = {
    init: initState,
    formLog,
    dataLog,
    exceptionLog
};
