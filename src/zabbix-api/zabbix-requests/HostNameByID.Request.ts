

export const HostNameByIDRequest = async (hostId: string): Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/get-host-name-by-id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            hostId
        })
    });
    return await response.json();
}
