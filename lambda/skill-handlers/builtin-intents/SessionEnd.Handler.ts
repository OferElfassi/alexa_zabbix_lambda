import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response, SessionEndedRequest} from "ask-sdk-model";
import {getIntentName, getRequestType} from "ask-sdk";
import {RequestTypes} from "../Constants";


export const SessionEndHandler: RequestHandler = {
    canHandle({requestEnvelope}: HandlerInput): boolean {
        return getRequestType(requestEnvelope) === RequestTypes.SessionEnded;
    },

    handle(handlerInput: HandlerInput): Response {
        console.log(`Session ended with reason: ${(handlerInput.requestEnvelope.request as SessionEndedRequest).reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};
