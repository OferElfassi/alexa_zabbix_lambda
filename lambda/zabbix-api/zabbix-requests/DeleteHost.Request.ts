
export const DeleteHostRequest = async (hostId: string) : Promise<IZabbixResponse<any>> => {
    const auth = await getAuth();
    let returnValue = {};
    const idToDeleteResult = await getHostIdByHostname(hostname);
    if (!idToDeleteResult.hostid || idToDeleteResult.hostid == -1) {
        returnValue.status = 400;
        returnValue.error = 'Host name does not exist';
        return returnValue;
    }
    const body = {
        "jsonrpc": "2.0",
        "method": "host.delete",
        "params": [
            idToDeleteResult.hostid
        ],
        "auth": auth,
        "id": requestId++
    }

    try {
        const res = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        if(res.data && res.data.result && res.data.result.hostids) {
            const isDeleted = res.data.result.hostids.includes(idToDeleteResult.hostid)
            if(isDeleted){
                returnValue.status = 200;
                returnValue.message = `Host ${hostname} deleted`;
                return returnValue;
            }
            else {
                throw Error('Error deleting host');
            }
        }

    } catch (err) {
        console.error(err);
        returnValue.status = 400;
        returnValue.error = 'Error deleting host';
        return returnValue;
    }
}
