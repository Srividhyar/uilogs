import { mockDataInitObject, mockDataObject } from "./__test__/mockData";
import { appState } from "./app";
import { logger } from "./index";

logger.init(mockDataInitObject);
console.log("ccx-logger test::=", appState.getCsrfToken())
logger.dataLog(mockDataObject);