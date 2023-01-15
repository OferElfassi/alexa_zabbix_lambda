import {HandlerInput, RequestHandler} from "ask-sdk-core";
import {Response} from "ask-sdk-model";
import {ZabbixApi} from "src/zabbix-api";
export const CloseProblemHandler : RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'CloseProblemIntent';
    },
    async handle  (handlerInput : HandlerInput){
        const speechText = 'Goodbye!';
        const problemId = handlerInput.requestEnvelope.request.intent.slots.problemId.value;
        const zabbixRes = await ZabbixApi.CloseProblemRequest(problemId);
        if(zabbixRes.success){
            return handlerInput.responseBuilder.speak(`Problem ${problemId} closed`).withSimpleCard('Goodbye!', speechText).withShouldEndSession(true).getResponse();
            }
        else{
            return handlerInput.responseBuilder.speak(`Problem ${problemId} not closed`).withSimpleCard('Goodbye!', speechText).withShouldEndSession(true).getResponse();
        }

    }


};
