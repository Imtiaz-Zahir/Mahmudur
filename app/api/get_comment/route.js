import { connectToDB } from "@/database";
import Comments from "@/models/comment";

export async function POST(req){
    const{pull,post_ID,skip}=await req.json();
    try {
        await connectToDB();
        const data=await Comments.find({post_ID:post_ID},null,{limit:pull}).populate('user_ID').sort({_id:-1}).skip(skip);
        return new Response(JSON.stringify(data),{status:201})
    } catch (error) {
        return new Response("Failed",{status:501})
    }
}