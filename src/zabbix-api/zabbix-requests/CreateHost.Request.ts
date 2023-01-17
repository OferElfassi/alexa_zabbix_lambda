

export const CreateHostRequest = async (hostName: string, hostGroup: string, hostIp: string): Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/create-host', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            hostName,
            hostGroup,
            hostIp
        })
    });
    return await response.json();
}
