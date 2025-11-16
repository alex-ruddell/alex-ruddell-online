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
        {/* TODO: Fix this animation. Duplicate the image set so the animation loops cleanly */}
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
      <div className="absolute inset-0 bg-blue-200/30" />

      <div className="relative z-10 flex flex-col justify-center h-full p-6">
        <h1 className="text-5xl md:text-6xl text-gray-900 leading-tight">
          Kia Ora, I'm Alex
        </h1>

        {/* TODO: Write better description. */}
        <p className="mt-3 max-w-2xl text-lg text-gray-799/80 leading-relaxed">
          Alex Ruddell is Backend Software Engineer hailing from Auckland, New Zealand. After obtaining a Bachelor of Mechatronics Engineering at the end of
          2021, Alex transitioned into the world of software engineering.
        </p>
      </div>

      <HoverScrollButton scrollToId="about-section" />
    </Section>
  );
}
