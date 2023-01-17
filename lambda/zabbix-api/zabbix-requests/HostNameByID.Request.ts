import {Request} from "./Request";

interface IHostNameByIDRequest{
    filter:{
        host?: string[];
        hostid: string[];
    }
}
export const HostNameByIDRequest = async (body:IReqBody<IHostNameByIDRequest>): Promise<IZabbixResponse<any>> => {
    try {
        body.params.output = ["host"];
        const data = await Request(body, 'Host does not exist.','Error retrieving host name by id.');
        return {success:true,message:"Success",data: {host:data.result[0].host}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }
}

