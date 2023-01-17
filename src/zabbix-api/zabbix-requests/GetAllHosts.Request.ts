

export const GetAllHostsRequest = async (zabbixApiUrl: string, zabbixApiToken: string) : Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/get-all-hosts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            zabbixApiUrl,
            zabbixApiToken
        })
    });
    return await response.json();
}
