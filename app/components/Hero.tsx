"use client";

import Section from "./common/Section";
import GoogleDefinition from "./common/GoogleDefinition";
import HeroTitle from "./common/HeroTitle";
import Gallery from "./common/gallery/Gallery";

export default function Hero() {

  return (
    <Section id="hero" className="
      relative flex flex-col lg:flex-row items-center justify-between 
      max-w-7xl px-12 lg:px-24 lg:min-h-screen">
        
      <div className="max-w-2xl space-y-6 mt-12 lg:mt-0">
        <HeroTitle />
        <GoogleDefinition />
      </div>

      <div className="w-full lg:w-[30%] max-w-2xl lg:ms-6">
        <Gallery />
      </div>

      { /* TODO: Chips for links to external sites, github, etc, remove need for nav bar? */ }
    </Section>
  );
}
