import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response, SessionEndedRequest} from "ask-sdk-model";


export const SessionEndHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },

    handle(handlerInput: HandlerInput): Response {
        // Any clean-up logic goes here.
        console.log(`Session ended with reason: ${(handlerInput.requestEnvelope.request as SessionEndedRequest).reason}`);

        return handlerInput.responseBuilder.getResponse();
    },
};
