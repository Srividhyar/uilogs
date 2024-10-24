import axios from 'axios';
import { appState } from '../app';

export const isValidURL = (url: string) => {
    const urlPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
    return !!(url && urlPattern.test(url));
};

export const createLog = async (log: any) => {
    if (isValidURL(appState.getAppState().path)) {
        const response = await axios
            .post(appState.getAppState().path + "/log", log, { headers: { 'CSRF-Token': appState.getCsrfToken() } })
            .then(response => {
                return response.status === 201
                    ? {
                        status: 'success',
                        message: 'Logging successful!',
                        statusText: response.statusText
                    }
                    : {
                        status: 'failed',
                        message: 'Something went wrong.',
                        statusText: response.statusText
                    };
            })
            .catch(error => {
                return { status: 'error', message: 'logging error.', error };
            });
        return response;
    } else {
        return { status: 'error', message: 'logging error.', error: 'Invalid API URL.' };
    }
};



export const getToken = async () => {
    if (isValidURL(appState.getAppState().path)) {
        const response = await axios
            .get(appState.getAppState().path + "/api/token")
            .then(response => {
                console.log("ccx-logger", response)
                return response.status === 200
                    ? response.data.csrfToken
                    : "";
            })
            .catch(error => {
                return { status: 'error', message: 'Token API error.', error };
            });
        return response;
    } else {
        return { status: 'error', message: 'Token API error.', error: 'Invalid API URL.' };
    }
};


