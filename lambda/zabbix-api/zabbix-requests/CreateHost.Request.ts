

export const CreateHostRequest = async (hostName: string, hostGroup: string, hostIp: string): Promise<IZabbixResponse<any>> => {
    const auth = await getAuth();
    const body = {
        "jsonrpc": "2.0",
        "method": "host.create",
        "params": {
            "host": hostname,
            "interfaces": [
                {
                    "type": 1,
                    "main": 1,
                    "useip": 1,
                    "ip": ip,
                    "dns": "",
                    "port": "10050"
                }
            ],
            "groups": [
                {
                    "groupid": groupId
                }
            ],
            "tags": [
                {
                    "tag": "Host name",
                    "value": hostname
                },
                {
                    "tag": "course",
                    "value": "course"
                }
            ]
        },
        "auth": auth,
        "id": requestId++
    }
    let returnValue = {};

    try {
        const resultGroupId = await getGroupNameById(groupId);
        if(!(resultGroupId.status == 200)){
            returnValue.status = 400;
            returnValue.error = 'Group id does not exist';
            return returnValue;
        }

        const res = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        returnValue.status = 200;
        if(res.data && res.data.result) {
            returnValue.hostid = res.data.result.hostids[0];
        } else {
            returnValue.status = 400;
            returnValue.error = res.data.error.data || res.data || 'Unkown error';
        }
        return returnValue;
    } catch (err) {
        returnValue.status = 400;
        returnValue.error = 'An error occurred.';
        console.error(err);
        return returnValue;
    }
}
