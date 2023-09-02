import React from "react";
import BigWindow from "./bigWindow";
import Tiltcom from "./Tiltcom";
import { connectToDB } from "@/database";
import Ui_Ux from "@/models/ui_ux";

export default async function UI_UX() {
    await connectToDB();
    const data = await Ui_Ux.find({}, null, { limit: 2 });

    return (
      <section id="UI/UX" className="flex flex-col items-center mt-28 mx-auto px-28 max-w-[1440px] text-white">
        <Tiltcom className="button text-5xl font-medium" title="UI/UX" />
        {data.map((data) => (
          <BigWindow data={data} />
        ))}
      </section>
    );
}
