"use client";

import Image from "next/image";
import Section from "./Section";
import HoverScrollButton from "./HoverScrollButton";
import GoogleDefinition from "./GoogleDefinition";
import HeroTitle from "./HeroTitle";

export default function Hero() {

  return (
    <Section id="hero" className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl space-y-6">
        <HeroTitle />
        <GoogleDefinition />
      </div>

      <div className="mt-10 md:mt-0 md:ml-12">
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-2xl shadow-md overflow-hidden">
          <Image
            src="/main.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      { /* TODO: Chips for links to external sites, github, etc, remove need for nav bar? */ }

      <HoverScrollButton scrollToId="about-section" />
    </Section>
  );
}
