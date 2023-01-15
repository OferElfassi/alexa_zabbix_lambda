import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";
import {ZabbixApi} from "src/zabbix-api";
export const CloseProblemHandler : RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'CloseProblemIntent';
    },
    handle(handlerInput : HandlerInput) : Response {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder.speak(speechText).withSimpleCard('Goodbye!', speechText).withShouldEndSession(true).getResponse();
    }
};
