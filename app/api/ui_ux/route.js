import { connectToDB } from "@/database";
import Ui_Ux from "@/models/ui_ux";

export async function POST(req){
    const{pull}=await req.json();
    try {
        await connectToDB();
        const data=await Ui_Ux.find({},null,{limit:pull});
        return new Response(JSON.stringify(data),{status:201})
    } catch (error) {
        return new Response("Failed",{status:501})
    }
}