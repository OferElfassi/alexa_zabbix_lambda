import {getIntentName, getRequestType} from "ask-sdk";
import {RequestTypes} from "../skill-handlers/Constants";

export const checkTypes = (reqEnvelope, target) =>  getRequestType(reqEnvelope) === target;
export const checkName = (reqEnvelope,target) => getIntentName(reqEnvelope) === target;

export const checkTypeAndName = (reqEnvelope, type, name) => checkTypes(reqEnvelope, type) && checkName(reqEnvelope, name);
