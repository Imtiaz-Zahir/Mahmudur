import { connectToDB } from "@/database"
import Ui_Ux from "@/models/ui_ux"

export async function GET(req) {
    try {
      await connectToDB();
      await Ui_Ux.create({
        image:Date.now().toString().concat("Desktop - 2.png")
      })
      return new Response({ok:true},{status:201})
    } catch (error) {
      return new Response("Faild",{status:500})
    }
  }