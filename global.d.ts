
declare global {

    interface IZabbixResponse<DATA_TYPE> {
        success: boolean;
        message: string;
        data: DATA_TYPE|any;
    }
}

export {};
