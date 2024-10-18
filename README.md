# @pawanmagare/ui-logs

** @pawanmagare/ui-logs ** This is basic overview to ensure logging the messages/JSON object to cloud platform under the respective projects and applications.

## Features

It could be utilized to accomplish the logging messages for the respective actions.
Node Module feature designed for logging is independent body which will be integrated to the MFEs that standardizes logging process across MFEs. This module contains various methodologies and templates that implement consistent logging strategies. This node module facilitates for logging of form events, custom logs, etc., By centralizing the logging function the module enhances code modularity and maintainability.

## Installation

install the module via npm:
`npm install @pawanmagare/ui-logs`

## Usage

`js : import { logger } from "@pawanmagare/ui-logs"; `

Above line imports the logger module from the "@pawanmagare/ui-logs" package. The logger object provides various logging functionalities.

`js  : logger.init(meta, path, modulator); `

Above method initializes the logger with three parameters: meta, path, and modulator.
meta: contains application data of the consuming web application.
path: contains server.js path of the consuming web application.
modulator: controls the logging behavior.

`js : logger.formLog(formLog); `

Logs an event related to forms. The formLog parameter contains details about the form event.

`js : logger.exceptionLog(exceptionLog); `

Logs an exception. The exceptionLog parameter holds the details of the exception being logged.

`js : logger.dataLog(dataLog); `

Logs data events. The dataLog parameter includes the details of the data event.

Above code is leveraging a logger to initialize logging and record different types of events: forms, exceptions, and data events.


