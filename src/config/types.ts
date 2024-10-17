export type Meta = {
    hostName: string;
    applicationName: string;
    division: string;
    correlationId: string;
    sourceApp: string;
    environment: string;
    agentDetails: AgentDetails;
    sourceChannel: SourceChannel;
};

type AgentDetails = {
    browser: string;
    agentId: string;
    appVersion: string;
};

type SourceChannel = {
    type: string;
    media: string;
    ticketType: string;
    serviceIntent: string;
};
