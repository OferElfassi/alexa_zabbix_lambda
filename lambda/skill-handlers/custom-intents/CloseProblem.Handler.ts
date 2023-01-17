import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";
import {ZabbixApi} from "lambda/zabbix-api";
import {getIntentName, getRequestType} from "ask-sdk";
import {IntentTypes, RequestTypes} from "../Constants";
import {checkTypeAndName} from "../../utils/checkTypes";

export const CloseProblemHandler: RequestHandler = {
    canHandle({requestEnvelope}: HandlerInput): boolean {
        return checkTypeAndName(requestEnvelope, RequestTypes.Intent, IntentTypes.CloseProblem);
    },
    async handle(handlerInput: HandlerInput) {
        const speechText = 'Goodbye!';
        const problemId = handlerInput.requestEnvelope.request.intent.slots.problemId.value;
        const zabbixRes = await ZabbixApi.CloseProblemRequest(problemId);
        if (zabbixRes.success) {
            return handlerInput.responseBuilder.speak(`Problem ${problemId} closed`).withSimpleCard('Goodbye!', speechText).withShouldEndSession(true).getResponse();
        } else {
            return handlerInput.responseBuilder.speak(`Problem ${problemId} not closed`).withSimpleCard('Goodbye!', speechText).withShouldEndSession(true).getResponse();
        }

    }


};
