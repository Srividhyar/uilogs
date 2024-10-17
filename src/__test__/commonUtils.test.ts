import { appState } from '../app';
import { buildLogMessage, getLogType, getSeverityLevel } from '../utils/commonUtils';
import { mockFormObject, mockDataObject, mockData } from './mockData';

describe('should send logs on basis of Modulator configuration', () => {
    beforeEach(() => {
        appState.getAppState = jest.fn(() => ({
            modulator: mockData.modulator,
            meta: mockData.meta,
            path: ''
        }));
        jest.clearAllMocks();
    });
    it('should return true for getSeverityLevel for condition', () => {
        expect(getSeverityLevel(mockFormObject.severity)).toBe(true);
    });
    it('should return false for getSeverityLevel for condition', () => {
        expect(getSeverityLevel(mockDataObject.severity)).toBe(false);
    });
    it('should validate log type', () => {
        expect(getLogType(mockFormObject.logType)).toBe(true);
    });
    it('should validate log type', () => {
        expect(getLogType(mockDataObject.logType)).toBe(false);
    });
});
