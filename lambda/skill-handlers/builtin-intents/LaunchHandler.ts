import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";
import {IntentTypes, RequestTypes, Texts} from "../Constants";
import {getIntentName, getRequestType} from "ask-sdk";
import {checkTypeAndName} from "../../utils/checkTypes";
export const LaunchHandler : RequestHandler = {
    canHandle({requestEnvelope} : HandlerInput){
        return checkTypeAndName(requestEnvelope, RequestTypes.Intent, RequestTypes.Launch);
    },
    handle(handlerInput : HandlerInput) : Response {
        const speechText = Texts.builtin.welcome_text;
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
