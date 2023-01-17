import {Request} from "./Request";


interface IHostNameByIDRequest{
    filter:{
        groupid: string[];
    }
}
export const HostNameByIDRequest = async ( groupid: string): Promise<IZabbixResponse<any>> => {
    try {
        const params = {filter:[groupid]}
        const data = await Request('hostgroup.get',params, 'Group does not exist.','An error occurred, please try again.');
        return {success:true,message:"Success",data: {group:data.result[0].name}};
    } catch (err) {
        return {success:false,message:err.message,data:null};
    }
}
