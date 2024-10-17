import { severityRank } from '../config/constants';
import { appState } from '../app';
import { IdataLog, IexceptionLog, IformLog, logTypes, severityLevels } from '../config/interfaces';
import { createLog } from './apiUtils';

export const getSeverityLevel = (severityLevel: severityLevels) => {
    const configuration = appState.getAppState();
    const getSeverityRank = (level: string): number => parseInt(severityRank[level as any]);
    return getSeverityRank(severityLevel) <= getSeverityRank(configuration.modulator.severity);
};
export const getLogType = (logType: logTypes): boolean => {
    const configuration = appState.getAppState();
    return configuration.modulator.logType.includes(logType);
};

export const buildLogMessage = (logData: IformLog | IdataLog | IexceptionLog) => {
    const severityLevel = logData.severity;
    const logType = logData.logType;
    const configuration = appState.getAppState();

    if (getSeverityLevel(severityLevel) && getLogType(logType)) {
        const cloudLogObject = {
            ...configuration.meta,
            ...logData
        };
        createLog(cloudLogObject)
            .then(data => console.log('data', data))
            .catch(error => console.log('error', error));
    }
};
