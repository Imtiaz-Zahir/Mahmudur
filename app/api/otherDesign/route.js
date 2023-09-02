import { connectToDB } from "@/database";
import OtherDesign from "@/models/otherDesign";

export async function Post(req) {
  const { catagory, image } = await req.json();
  try {
    await connectToDB();
    const res = await OtherDesign.findOne({ catagory });
    if (res) {
      await OtherDesign.updateOne(
        { catagory },
        { images: [...res.images, Date.now().toString().concat(image)] }
      );
    } else {
      await OtherDesign.create({
        catagory: catagory,
        images: [Date.now().toString().concat(image)],
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Faild", { status: 500 });
  }
}

