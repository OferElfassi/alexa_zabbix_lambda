import {restApi} from "../../utils";
import {Request} from "./Request";


export const ZabbixAuth = async (user: string,password: string): Promise<IZabbixResponse<any>> => {
    try {
        const data = await Request('user.login',{user,password},null, "Error getting auth token");
        return {success:true,message:"Login success",data:data};
    } catch ({message}) {
        return {success:false,message,data:null};
    }
}
