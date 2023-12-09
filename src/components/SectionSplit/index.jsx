import React from "react";
import img1 from "../../assets/image66.png";
import Button from "../Button";

export default function SectionSplit({
  src = img1,
  title = "Presbiterianismo",
  subTitle = "O que é?",
  desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.",
}) {
  return (
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
        <img
          alt="Party"
          src={src}
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div class="lg:py-24">
        <h2 class="text-2xl text-dark-red font-bold uppercase sm:text-3xl">
          {title}
        </h2>
        <span className="text-[#612419] uppercase font-bold">{subTitle}</span>

        <p class="mt-4 text-black-c">{desc}</p>
        <Button className={"mt-8 inline-block"}>Saiba mais</Button>
      </div>
    </div>
  );
}
