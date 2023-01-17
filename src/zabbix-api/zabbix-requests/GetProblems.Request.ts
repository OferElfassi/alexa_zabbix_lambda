

export const GetProblemsRequest = async (hostName: string): Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/get-problems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            hostName
        })
    });
    return await response.json();
}
