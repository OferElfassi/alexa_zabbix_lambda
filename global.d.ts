
declare global {

    interface IZabbixResponse<DATA_TYPE> {
        success: boolean;
        message: string;
        data: DATA_TYPE|any;
    }

    interface IHost{
        ip: string;
        hostname:string;
        groupid:string;
    }

    enum ProblemSource {
          Trigger,
            Internal ,
            Service ,
    }
    enum ProblemSeverity {
        UnClassified,
        Information,
        Warning,
        Average,
        High,
        Disaster,
    }
    interface IProblem{
        problemId:string;
        problem:string;
        severity:ProblemSeverity;
        hostname:string;
        isClosable:boolean;
    }



    /**
     * A matched slot value (if `status.code` = "ER_SUCCESS_MATCH").
     */
    export interface MatchedSlotValue {
        name: string; // slot name
        value: string; // unresolved user input
        isMatch: true; // statis.code` = "ER_SUCCESS_MATCH"
        resolved: string; //  The first resolved value.
        id: string; // The first resolved id.
        isAmbiguous: boolean; // `True` if there are multiple resolved values.
        values: slu.entityresolution.Value[]; // All resolved values. If there are multiple values, `isAmbiguous` will be `true`.
        confirmationStatus: SlotConfirmationStatus; // Whether the user has explicitly confirmed or denied the value of this slot.
    }

    /**
     * An unmatched slot value (if `status.code` != "ER_SUCCESS_MATCH").
     */
    export interface UnmatchedSlotValue {
        name: string;   // Name of the slot.
        value: string; // Value that the user said (unresolved).
        isMatch: false; // statis.code` != "ER_SUCCESS_MATCH"
        confirmationStatus: SlotConfirmationStatus
    }

    export interface SlotValues {
        [key: string]: MatchedSlotValue | UnmatchedSlotValue | undefined;
    }

    interface IReqBody {
        method: string
        auth?: string
    }
    interface IReqParams {
        body: IReqBody
        withErrorMsg?: string
    }



    type Slots = { [key: string]: Slot };
}

export {};
