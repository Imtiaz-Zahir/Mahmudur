import React from "react";
import Image from "next/image";
import BigWindowBottom from "./bigWindowBottom";
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";

export default async function bigWindow({ data }) {
  const session = await getServerSession(handler);

  return (
    <div className="bwin mt-28" key={data._id}>
      <div className="py-8 pl-8 pr-1 big-window rounded-3xl">
        <div className="overflow-y-scroll  h-[742px] scroll">
          <Image
            className="pr-1 w-full"
            src={`/ui_ux/${data.image}`}
            loading="lazy"
            width={996}
            height={742}
            alt=""
          />
        </div>
      </div>
      <BigWindowBottom user={session?.user} data={data}/>
    </div>
  );
}
