import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";
import {getIntentName, getRequestType} from "ask-sdk";
import {IntentTypes, RequestTypes, Texts} from "../Constants";


export const CancelStopHandler: RequestHandler = {
    canHandle({requestEnvelope}: HandlerInput): boolean {
        const CancelStopIntents= [IntentTypes.Cancel,IntentTypes.Stop];
        return (
            getRequestType(requestEnvelope) === RequestTypes.Intent
            && CancelStopIntents.some(intent => intent === getIntentName(requestEnvelope))
        )
    },
    handle(handlerInput: HandlerInput): Response {
        const speechText = Texts.builtin.good_bye_text;
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(true)
            .getResponse();
    },
};
