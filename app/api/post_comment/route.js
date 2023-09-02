import { connectToDB } from "@/database";
import Comments from "@/models/comment";

export async function POST(req) {
    const {user_ID,post_ID,comment}=await req.json();

    try {
      await connectToDB();
      const newComment=await Comments.create({
        user_ID,
        post_ID,
        comment
      })
      return new Response(JSON.stringify(newComment),{status:201})
    } catch (error) {
        console.log(error);
      return new Response("Faild",{status:500})
    }
  }