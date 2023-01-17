import {Request} from "./Request";


export const IDByHostNameRequest = async (hostname:string,auth:string): Promise<IZabbixResponse<any>> => {
    try {
        const params = {output :["hostid"],filter:{host:[hostname]}}
        const data = await Request("ssd",params, auth,"Host name does not exist.","Error retrieving host name by id.");
        return {success:true,message:"Login success",data: {host:data.result[0].hostid}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }




}
