

export const GroupByIDRequest = async (id: string) : Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/get-group-by-id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    });
    return await response.json();
}
