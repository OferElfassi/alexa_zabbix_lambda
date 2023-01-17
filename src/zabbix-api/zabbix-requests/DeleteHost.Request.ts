
export const DeleteHostRequest = async (hostId: string) : Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/delete-host', {
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
