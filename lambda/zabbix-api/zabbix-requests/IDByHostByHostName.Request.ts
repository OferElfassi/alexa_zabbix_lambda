import {Request} from "./Request";


interface IIDByHostByHostNameRequest{
    filter:{
        host: string[];
        output?: string[];
    }
}
export const IDByHostNameRequest = async (body:IReqBody<IIDByHostByHostNameRequest>): Promise<IZabbixResponse<any>> => {
    try {
        body.params.output = ["hostid"];
        const data = await Request(body, "Host name does not exist.","Error retrieving host name by id.");
        return {success:true,message:"Login success",data: {host:data.result[0].hostid}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }




}
