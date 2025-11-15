"use client";

import Image from "next/image";
import Section from "./Section";
import HoverScrollButton from "./HoverScrollButton";

export default function Hero() {

  return (
    <Section id="hero" className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Kia Ora, I'm Alex
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          {/* TODO: Write a better description. */}
          Alex Ruddell is Backend Software Engineer hailing from Auckland, New Zealand. After obtaining a Bachelor of Mechatronics Engineering at the end of
          2021, Alex transitioned into the world of software engineering.
        </p>
      </div>

      <div className="mt-10 md:mt-0 md:ml-12">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-lg">
          <Image
            src="/main.jpg"
            alt="Hero Image"
            className="object-cover"
            priority
            width={250}
            height={250}
            />
        </div>
      </div>

      <HoverScrollButton scrollToId="about-section" />
    </Section>
  );
}
