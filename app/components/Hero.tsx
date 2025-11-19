"use client";

import Section from "./common/Section";
import HoverScrollButton from "./common/HoverScrollButton";
import GoogleDefinition from "./common/GoogleDefinition";
import HeroTitle from "./common/HeroTitle";
import ScrollingGallery from "./common/scrollingGallery/ScrollingGallery";

export default function Hero() {

  return (
    <Section id="hero" className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
      <div className="max-w-2xl space-y-6">
        <HeroTitle />
        <GoogleDefinition />
      </div>

      <div className="w-full md:w-[30%]">
        <ScrollingGallery />
      </div>

      { /* TODO: Chips for links to external sites, github, etc, remove need for nav bar? */ }

      <HoverScrollButton scrollToId="about-section" />
    </Section>
  );
}
