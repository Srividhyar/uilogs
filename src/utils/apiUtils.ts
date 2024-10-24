import axios from 'axios';
import { appState } from '../app';

export const isValidURL = (url: string) => {
    const urlPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
    return !!(url && urlPattern.test(url));
};

export const createLog = async (log: any) => {
    if (isValidURL(appState.getAppState().path)) {
        let token = appState.getCsrfToken()
        if (!appState.getCsrfToken()) {
            token = await getToken().then(data => { return data.message });
        }
        const response = await fetch('http://localhost:3100/log', {
            method: 'POST',
            headers: {
                'Csrf-Token': token
            },
            body: log
        })
       // const data = await res;
        //console.log("fetch", res)
        // const response = await axios({
        //     method: "POST",
        //     url: appState.getAppState().path + "/log",
        //     data: log,
        //     headers: { 'CSRF-Token': appState.getCsrfToken() }
        // })
        //     //  .post(appState.getAppState().path + "/log", { headers: { 'CSRF-Token': appState.getCsrfToken() }, data: log })
        //     .then(response => {
        //         return response.status === 201
        //             ? {
        //                 status: 'success',
        //                 message: 'Logging successful!',
        //                 statusText: response.statusText
        //             }
        //             : {
        //                 status: 'failed',
        //                 message: 'Something went wrong.',
        //                 statusText: response.statusText
        //             };
        //     })
        //     .catch(error => {
        //         return { status: 'error', message: 'logging error.', error };
        //     });
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
                appState.setToken(response.data.csrfToken);
                return response.status === 200
                    ? { status: 'error', message: response.data.csrfToken, error: "" }
                    : { status: 'error', message: "Token not found", error: "" };
            })
            .catch(error => {
                return { status: 'error', message: 'Token API error.', error };
            });
        return response;
    } else {
        return { status: 'error', message: 'Token API error.', error: 'Invalid API URL.' };
    }
};


