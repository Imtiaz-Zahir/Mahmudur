import Image from "next/image";
import Skill from "@/components/skill";
import UI_UX from "@/components/UI_UX";
import Other from "@/components/other";

export default function page() {
  return (
    <>
      <section className="flex justify-between mx-auto px-28 max-w-[1440px] text-white mt-20 items-baseline">
        <div className="pb-20">
        <Image className="titalShadow h-[510px]" src="/Title Green.png" priority={true} width={794} height={510} alt="Title" /></div>
        <Image
          src="/Pan tools Green.svg"
          priority={true}
          width={395}
          height={652.56}
          alt="Pan Toll"
        />
      </section>
      <Skill />
      <UI_UX/>
      <Other />
    </>
  );
}
