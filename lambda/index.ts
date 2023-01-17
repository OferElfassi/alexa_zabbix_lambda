import {SkillBuilders,} from 'ask-sdk-core';
import {NativeSkillHandlers,CustomSkillHandlers,ErrorHandler} from './skill-handlers';

/**
 * This is the entry point for the Lambda function.
 */
exports.handler = SkillBuilders.custom()
    .addRequestHandlers(
        NativeSkillHandlers.LaunchHandler,
        NativeSkillHandlers.HelpHandler,
        NativeSkillHandlers.CancelStopHandler,
        NativeSkillHandlers.SessionEndHandler,
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
