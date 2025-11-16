"use client";

import Image from "next/image";
import Section from "./Section";
import HoverScrollButton from "./HoverScrollButton";

export default function Hero() {
  const images = [
    "/main.jpg",
    "/main.jpg",
    "/main.jpg",
  ];

  return (
    <Section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 flex animate-scroll-x">
        {/* Duplicate the image set so the animation loops cleanly */}
        {[...images, ...images].map((src, i) => (
          <div key={i} className="relative w-[100vw] h-screen flex-shrink-0">
            <Image
              src={src}
              alt="Hero background"
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-200/50" />

      <div className="relative z-10 flex flex-col justify-center h-full p-6">
        <h1 className="text-5xl md:text-7xl font-bold text-black drop-shadow-lg">
          Kia Ora, I'm Alex
        </h1>

        {/* TODO: Write better description. */}
        <p className="mt-6 max-w-2xl text-lg md:text-2xl text-black/80">
          Alex Ruddell is Backend Software Engineer hailing from Auckland, New Zealand. After obtaining a Bachelor of Mechatronics Engineering at the end of
          2021, Alex transitioned into the world of software engineering.
        </p>
      </div>

      <HoverScrollButton scrollToId="about-section" />
    </Section>
  );
}
