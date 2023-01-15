

export const CloseProblemRequest = async (problemId:string): Promise<IZabbixResponse<any>> => {
    const response = await fetch('http://localhost:3000/api/zabbix/close-problem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            problemId
        })
    });
    return await response.json();
}
