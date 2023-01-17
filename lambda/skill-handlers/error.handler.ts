import {ErrorHandler as ASK_ErrorHandler, HandlerInput} from "ask-sdk-core";
import {Response} from "ask-sdk-model";

export const ErrorHandler : ASK_ErrorHandler = {
    canHandle(_handlerInput : HandlerInput, _error : Error ) : boolean {
        return true;
    },
    handle(handlerInput : HandlerInput, error : Error) : Response {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, I don\'t understand your command. Please say it again.')
            .reprompt('Sorry, I don\'t understand your command. Please say it again.')
            .getResponse();
    }
};
