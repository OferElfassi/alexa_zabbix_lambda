import {Request} from "./Request";

interface IHostNameByIDRequest{
    filter:{
        host?: string[];
        hostid: string[];
    }
}
export const HostNameByIDRequest = async (hostid:string,auth:string): Promise<IZabbixResponse<any>> => {
    try {
        const params = {output :["host"],filter:{hostid:[hostid]}}
        const data = await Request('ss',params, auth,'Host does not exist.','Error retrieving host name by id.');
        return {success:true,message:"Success",data: {host:data.result[0].host}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }
}

