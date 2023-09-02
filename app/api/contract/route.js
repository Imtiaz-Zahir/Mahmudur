import { connectToDB } from "@/database";
import Contract from "@/models/contractForm";

export async function POST(req) {
    const {name,email,subject,message}=await req.json();

    try {
      await connectToDB();
      await Contract.create({
        name,
        email,
        subject,
        message
      })
      return new Response(JSON.stringify({ok:true}),{status:201})
    } catch (error) {
        console.log(error);
      return new Response("Faild",{status:500})
    }
  }