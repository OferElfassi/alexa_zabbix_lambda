export const ZabbixAuth = async (): Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}
