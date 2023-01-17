
export const Texts ={
    builtin:{
        welcome_text:'Hello, I am your Zabbix development assistant. I can help you with your Zabbix server. What can I do for you?',
        help_text : 'you can ask me to get all hosts, get all problems, get host by name, get host by id, get id by host name, get group by id, get host name by id, create host, delete host, close problem',
   good_bye_text:'Good bye, see you soon',
    },
    ask:{
        giv_host_values:'Please tell me the group id for the host and also the host name and the host ip',
        give_host_name : 'give me host name',
        give_host_id : 'give me host ip',
        give_group_id : 'give me group id',
        give_problem_id : 'give me problem id',
    },
    errors:{
        no_host_name : 'I could not hear the host name',
        no_group_id: 'I could not hear the group id',
        no_host_id: 'I could not hear the host id',
        no_ip_address: 'I could not hear the ip address',
        no_event_id: 'I could not hear the event id',
        no_host_by_name: 'I can not find the host with this name',
        no_host_by_id: 'I can not find the host with this id',
        no_group_by_id: 'I can not find the group with this id',
        host_already_exist: 'Host with this name already exist',
        host_create_unknown_error: 'I can not create host due to unknown error',
        failed_get_problems: 'I can not get problems due to unknown error, please try again later',
        failed_close_problem: 'I can not close problem due to unknown error, please try again',
    },
    success:{
        host_created: 'The host you requested has been created',
        problem_closed: 'The problem you wanted to close has been closed successfully',
        host_deleted: 'the host you wanted to delete has been deleted successfully',
    }
}

export enum RequestTypes {
    Launch = "LaunchRequest",
    Intent = "IntentRequest",
    SessionEnded = "SessionEndedRequest",
    SystemExceptionEncountered = "System.ExceptionEncountered",
}
export enum IntentTypes {
    Help = "AMAZON.HelpIntent",
    Stop = "AMAZON.StopIntent",
    Cancel = "AMAZON.CancelIntent",
    Fallback = "AMAZON.FallbackIntent",
    CloseProblem = "CloseProblemIntent",

    HelloWorld = "HelloWorldIntent",
}

export enum ErrorTypes {
    Unknown = "UnknownError",
    Unexpected = "UnexpectedError",
}
