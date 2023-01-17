

export const CloseProblemRequest = async (problemId:string): Promise<IZabbixResponse<any>> => {
    const auth = await getAuth();
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
