

export const GetProblemsRequest = async (hostName: string): Promise<IZabbixResponse<any>> => {
    const auth = await getAuth();
    const body = {
        "jsonrpc": "2.0",
        "method": "problem.get",
        "params": {
            "output": "extend",
            "selectAcknowledges": "extend",
            "selectTags": "extend",
            "selectSuppressionData": "extend",
            "sortfield": ["eventid"],
            "sortorder": "DESC"
        },
        "auth": auth,
        "id": requestId++
    }
    const returnValue = {};
    try {
        const problems = await axios.post(zabbixApi, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        const severities = ['Not classified', 'Information', 'Warning', 'Average', 'High', 'Disaster'];
        let info = problems.data.result.map(async(problem)=>{
            const problemInfo ={
                problemId: problem.eventid,
                problem: problem.name,
                severity: severities[problem.severity]
            }
            const hostname = await getHostnameByEventId(problem.eventid);
            if(hostname){
                problemInfo.hostname = hostname;
            }
            problemInfo.isClosable = await isProblemCloseable(problem.objectid);
            return problemInfo;
        });
        info = await Promise.all(info)
        returnValue.status = 200;
        returnValue.problems = info;
        return returnValue;
    } catch (err) {
        console.error(err);
        returnValue.status = 400;
        returnValue.error = 'Error getting problems';
        return returnValue;
    }
}
