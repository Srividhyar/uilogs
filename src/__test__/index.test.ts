import { appState } from '../app';
import { IAppConfig } from '../config/interfaces';
import { logger } from '../index';
import {
    mockData,
    mockDataInitObject,
    mockDataObject,
    mockExceptionInitObject,
    mockExceptionObject,
    mockFormObject
} from './mockData';

const initStateMock = jest.fn((appConfig: IAppConfig) => {
    return { ...appConfig };
});
beforeEach(() => {
    jest.clearAllMocks();
});

describe('bootstrap node module', () => {
    it('should call initState with correct appConfig', () => {
        const appConfig: IAppConfig = { ...mockData };
        initStateMock(appConfig);
        expect(initStateMock).toHaveBeenCalledTimes(1);
        expect(initStateMock).toHaveBeenCalledWith(appConfig);
    });

    it('calls init Config', () => {
        logger.init(mockData);
        expect(appState.getAppState()).toEqual(mockData);
    });

    it('should export logger object', () => {
        expect(logger).toBeDefined();
        expect(logger.init).toBeDefined();
        expect(logger.formLog).toBeDefined();
        expect(logger.exceptionLog).toBeDefined();
    });

    it('should return Invalid api status', async () => {
        const spy = jest.spyOn(console, 'log');
        await logger.formLog(mockFormObject);
        expect(spy).toHaveBeenCalledWith('data', {
            status: 'error',
            message: 'logging error.',
            error: 'Invalid API URL.'
        });
    });

    it('dataLog logs correct error message', async () => {
        logger.init(mockDataInitObject);
        const spy = jest.spyOn(console, 'log');
        await logger.dataLog(mockDataObject);
        expect(spy).toHaveBeenCalledWith('data', {
            status: 'error',
            message: 'logging error.',
            error: 'Invalid API URL.'
        });
    });

    it('exceptionLog logs correct error message', async () => {
        logger.init(mockExceptionInitObject);
        const spy = jest.spyOn(console, 'log');
        await logger.exceptionLog(mockExceptionObject);
        expect(spy).toHaveBeenCalledWith('data', {
            status: 'error',
            message: 'logging error.',
            error: 'Invalid API URL.'
        });
    });
});
