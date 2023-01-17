

export const GetAllHostsRequest = async (zabbixApiUrl: string, zabbixApiToken: string) : Promise<IZabbixResponse<any>> => {
    const auth = await getAuth();
    let returnValue = {};

    const body= {
        "jsonrpc": "2.0",
        "method": "host.get",
        "params": {
        },
        "auth": auth,
        "id": requestId++
    }
    try {
        const hosts = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        let hostsInfo = hosts.data.result.map((host)=>{
            return host.host;
        });
        returnValue.status = 200;
        returnValue.hostsInfo = hostsInfo;
        return returnValue;
    } catch (err) {
        console.error(err);
        returnValue.status = 400;
        returnValue.error = 'Error getting hosts';
        return returnValue;
    }
}
