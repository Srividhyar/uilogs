import axios from 'axios';
import { appState } from '../app';

export const isValidURL = (url: string) => {
    const urlPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
    return !!(url && urlPattern.test(url));
};

export const createLog = async (log: any) => {
    if (isValidURL(appState.getAppState().path)) {
        const response = await axios
            .post(appState.getAppState().path, log)
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

