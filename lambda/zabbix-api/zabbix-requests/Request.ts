import fetch from "node-fetch";
import * as url from "url";
import {IDGen, restApi} from "../../utils";

const zserver = '176.231.29.139:20202';
const zabbixApi = 'http://' + zserver + '/zabbix/api_jsonrpc.php';
type Params = { [key: string]: any };


export const Request = async(method = '',params:any,auth?:string, with400ErrorMsg = '', with500ErrorMsg = '') => {
    const requestBody = {
        jsonrpc: "2.0",
        id: IDGen(),
        method, params, auth,
    }
    const res = await restApi.post(zabbixApi, requestBody);
    return restApi.handleResult(res, with400ErrorMsg, with500ErrorMsg);
}
