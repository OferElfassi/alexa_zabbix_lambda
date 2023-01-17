import {Request} from "./Request";


interface IHostNameByIDRequest{
    filter:{
        groupid: string[];
    }
}
export const HostNameByIDRequest = async ( groupid: string): Promise<IZabbixResponse<any>> => {
    try {
        const params = {filter:[groupid]}
        const data = await Request('hostgroup.get',params, 'Group does not exist.','An error occurred, please try again.');

        return {success:true,message:"Success",data: {group:data.result[0].name}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }
}

export const GroupByIDRequest = async (id: string) : Promise<IZabbixResponse<any>> => {
    const auth = await getAuth();
    const body = {
        "jsonrpc": "2.0",
        "method": "hostgroup.get",
        "params": {
            "filter": {
                "groupid": [
                    groupId
                ]
            }
        },
        "id": requestId++,
        "auth": auth
    }
    let returnValue = {};
    try {
        const res = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        returnValue.status = 200;
        if(!res.data.result || !res.data.result.length == 1) {
            returnValue.status = 400;
            returnValue.error = 'Group does not exist.';
            return returnValue;
        }
        returnValue.group = res.data.result[0].name;
        return returnValue;
    } catch (err) {
        returnValue.status = 400;
        returnValue.error = 'An error occurred, please try again.';
        console.error(err);
        return returnValue;
    }
}
