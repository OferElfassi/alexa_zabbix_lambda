import {Request} from "./Request";


export const CloseProblemRequest = async (problemId:string): Promise<IZabbixResponse<any>> => {

    try {
        const params = {eventids:problemId, action:1, message:"Problem resolved."}
        const data = await Request('event.acknowledge',params, 'Group does not exist.','An error occurred, please try again.');
        return {success:true,message:"Success",data: {group:data.result[0].name}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }



    const body={
        "jsonrpc": "2.0",
        "method": "event.acknowledge",
        "params": {
            "eventids": eventid,
            "action": 1,
            "message": "Problem resolved."
        },
        "auth": auth,
        "id": requestId++
    }
    let returnValue = {};
    try{
        const res = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });

        if(!res.data.result || !res.data.result.eventids || res.data.result.eventids.length != 1) {
            returnValue.status = 400;
            returnValue.error = 'Could not close problem.';
            return returnValue;
        }
        returnValue.status = 200;
        returnValue.message = 'Problem closed.';
        return returnValue;

    } catch(err){
        console.error(err);
        returnValue.status = 400;
        returnValue.error = 'Error closing problem.';
        return returnValue;
    }
}
