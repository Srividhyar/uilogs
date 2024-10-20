import axios from 'axios';
import { isValidURL, createLog } from '../utils/apiUtils';
import { appState } from '../app';

describe('isValidURL', () => {
    it('returns true for a valid URL', () => {
        const validUrl = 'https://example.com';
        expect(isValidURL(validUrl)).toBe(true);
    });

    it('returns false for an invalid URL', () => {
        const invalidUrl = ' invalid url ';
        expect(isValidURL(invalidUrl)).toBe(false);
    });
});

const postSpy = jest.spyOn(axios, 'post');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('createLog', () => {
    it('returns success response for a valid URL and successful request', async () => {
        const logObject = { foo: 'bar' };
        const validUrl = 'https://example.com';
        appState.getAppState().path = validUrl;
        postSpy.mockImplementation(() => Promise.resolve({ status: 201, statusText: 'OK' }));
        const response = await createLog(logObject);
        expect(response).toEqual({
            status: 'success',
            message: 'Logging successful!',
            statusText: 'OK'
        });
    });

    it('returns success response for a valid URL and unsuccessful request', async () => {
        const logObject = { foo: 'bar' };
        const validUrl = 'https://example.com';
        appState.getAppState().path = validUrl;
        postSpy.mockImplementation(() =>
            Promise.resolve({ status: 503, statusText: 'service is unavailable.' })
        );
        const response = await createLog(logObject);
        expect(response).toEqual({
            status: 'failed',
            message: 'Something went wrong.',
            statusText: 'service is unavailable.'
        });
    });

    it('returns error response for a valid URL and failed request', async () => {
        const logObject = { foo: 'bar' };
        const validUrl = 'https://example.com';
        appState.getAppState().path = validUrl;

        postSpy.mockImplementation(() => Promise.reject(new Error('Request failed')));

        const response = await createLog(logObject);
        expect(response).toEqual({
            status: 'error',
            message: 'logging error.',
            error: expect.any(Error)
        });
    });

    it('returns error response for an invalid URL', async () => {
        const logObject = { foo: 'bar' };
        appState.getAppState().path = ' invalid url ';
        const response = await createLog(logObject);
        expect(response).toEqual({
            status: 'error',
            message: 'logging error.',
            error: 'Invalid API URL.'
        });
    });
});
