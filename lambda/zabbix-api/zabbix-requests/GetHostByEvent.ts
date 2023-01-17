const getHostnameByEventId=async(eventid)=>{
    const auth = await getAuth();
    const body={
        "jsonrpc": "2.0",
        "method": "event.get",
        "params": {
            "output": "extend",
            "select_acknowledges": "extend",
            "selectTags": "extend",
            "selectSuppressionData": "extend",
            "sortfield": ["clock", "eventid"],
            "sortorder": "DESC",
            "selectHosts":1,
            "filter": {
                "value": 1,
                "eventid": eventid
            }
        },
        "auth": auth,
        "id": requestId++
    }

    try{
        const hostnameRes = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        if(!hostnameRes.data.result || hostnameRes.data.result.length != 1) {
            throw Error('No host name')
        }
        let hostname= await getHostnameByHostId(hostnameRes.data.result[0].hosts[0].hostid);
        if(!hostname.host) {
            throw Error('No host name')
        }
        return hostname.host;

    }catch(err){
        console.error(err);
        return '';
    }
}
