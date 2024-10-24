import { appState } from './app';
import { IAppConfig } from './config/interfaces';
import { getToken } from './utils/apiUtils';
import { formLog, exceptionLog, dataLog } from './utils/logsFormat';

const initState = (appConfig: IAppConfig) => {
    appState.setAppState(appConfig);
    getToken(appConfig.path)
};

export const logger = {
    init: initState,
    formLog,
    dataLog,
    exceptionLog
};
