import { logTypes, severityLevels } from '../config/interfaces';
import { Meta } from '../config/types';

export const mockData = {
    meta: {
        hostName: 'hostIP',
        applicationName: 'MSA Web',
        division: 'bcom / mcom',
        correlationId: 'ContactId',
        sourceApp: 'MFE Application Name',
        environment: 'DEV /QA /Pilot /Prod',
        agentDetails: {
            browser: 'Chrome or safari',
            agentId: 'employee id',
            appVersion: '24.10.4'
        },
        sourceChannel: {
            type: 'genesys or standAlone',
            media: 'sms or mail or voice or chat',
            ticketType: 'big ticket or small ticket',
            serviceIntent: 'reason to raise service'
        }
    },
    path: 'some/path',
    modulator: {
        activator: true,
        severity: severityLevels.WARN,
        logType: [logTypes.form]
    }
};

export const mockDefaultData = {
    meta: {} as Meta,
    path: '',
    modulator: {
        activator: true,
        severity: severityLevels.INFO,
        logType: [logTypes.data]
    }
};

export const mockExceptionObject = {
    severity: severityLevels.CRITICAL,
    logType: logTypes.exception,
    data: 'Unable to get authorization token.',
    exception: {
        type: ' UI.AuthCookieError',
        message: 'Unable to get authorization token.',
        stacktrace: 'call stack of error'
    },
    workFlow: {
        name: 'login',
        component: 'login'
    }
};

export const mockExceptionInitObject = {
    meta: {
        hostName: 'hostIP',
        applicationName: 'MSA Web',
        division: 'bcom / mcom',
        correlationId: 'ContactId',
        sourceApp: 'MFE Application Name',
        environment: 'DEV /QA /Pilot /Prod',
        agentDetails: {
            browser: 'Chrome or safari',
            agentId: 'employee id',
            appVersion: '24.10.4'
        },
        sourceChannel: {
            type: 'genesys or standAlone',
            media: 'sms or mail or voice or chat',
            ticketType: 'big ticket or small ticket',
            serviceIntent: 'reason to raise service'
        }
    },
    path: 'some/path',
    modulator: {
        activator: true,
        severity: severityLevels.WARN,
        logType: [logTypes.exception]
    }
};

export const mockDataInitObject = {
    meta: {
        hostName: 'hostIP',
        applicationName: 'MSA Web',
        division: 'bcom / mcom',
        correlationId: 'ContactId',
        sourceApp: 'MFE Application Name',
        environment: 'DEV /QA /Pilot /Prod',
        agentDetails: {
            browser: 'Chrome or safari',
            agentId: 'employee id',
            appVersion: '24.10.4'
        },
        sourceChannel: {
            type: 'genesys or standAlone',
            media: 'sms or mail or voice or chat',
            ticketType: 'big ticket or small ticket',
            serviceIntent: 'reason to raise service'
        }
    },
    path: 'some/path',
    modulator: {
        activator: true,
        severity: severityLevels.DEBUG,
        logType: [logTypes.data]
    }
};

export const mockDataObject = {
    severity: severityLevels.DEBUG,
    logType: logTypes.data,
    data: '{key:Description, searchValue:cup}',
    workFlow: {
        name: 'search',
        component: 'find Product'
    }
};
export const mockFormObject = {
    severity: severityLevels.ERROR,
    logType: logTypes.form,
    data: ' {id:header_searchButton,value:,elementType:button} ',
    event: 'click',
    workFlow: {
        name: 'search',
        component: 'find Product'
    }
};

export const mockLogObject = {
    hostName: 'hostIP',
    applicationName: 'MSA Web',
    division: 'bcom / mcom',
    correlationId: 'ContactId',
    sourceApp: 'MFE Application Name',
    environment: 'DEV /QA /Pilot /Prod',
    agentDetails: {
        browser: 'Chrome or safari',
        agentId: 'employee id',
        appVersion: '24.10.4'
    },
    sourceChannel: {
        type: 'genesys or standAlone',
        media: 'sms or mail or voice or chat',
        ticketType: 'big ticket or small ticket',
        serviceIntent: 'reason to raise service'
    },
    severity: severityLevels.ERROR,
    logType: logTypes.form,
    data: ' {id:header_searchButton,value:,elementType:button} ',
    event: 'click',
    workFlow: {
        name: 'search',
        component: 'find Product'
    }
};
