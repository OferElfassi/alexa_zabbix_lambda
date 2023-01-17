const getTriggerById = async(triggerId)=>{
    const auth = await getAuth();
    const body={
        "jsonrpc": "2.0",
        "method": "trigger.get",
        "params": {
            "triggerids": triggerId,
            "output": "extend",
            "selectFunctions": "extend"
        },
        "auth": auth,
        "id": requestId++
    }

    try{
        const res = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        if(!(res.data.result && res.data.result.length == 1))
            throw Error();
        return res.data.result[0];

    }catch(err){
        console.error(err);
        return null;
    }
}
