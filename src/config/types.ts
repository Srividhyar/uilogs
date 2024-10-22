import { division, environment } from "./constants";

export type Meta = {
    hostName: string;
    applicationName: string;
    division: division;
    correlationId: string;
    sourceApp: string;
    appVersion: string;
    environment: environment;
    agentDetails: AgentDetails;
    sourceChannel: SourceChannel;
};

type AgentDetails = {
    browser: { name: string; version: string; }
    agentId: string;
};

type SourceChannel = {
    type: string;
    media: string;
    ticketType: string;
    serviceIntent: string;
};
