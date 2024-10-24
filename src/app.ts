import { IAppState, logTypes, severityLevels } from './config/interfaces';
import { Meta } from './config/types';

class App {
    private appState: IAppState = {
        meta: {} as Meta,
        path: '',
        modulator: {
            activator: true,
            severity: severityLevels.INFO,
            logType: [logTypes.data]
        }
    };
    private csrfToken = "";
    public getAppState(): IAppState {
        return this.appState;
    }

    public setAppState(appStateValue: IAppState) {
        this.appState = appStateValue;
    }

    public setToken(token: string) {
        console.log("ccx-logger::=", token)
        this.csrfToken = token;
    }

    public getCsrfToken() {
        return this.csrfToken;
    }
}
export const appState = new App();
