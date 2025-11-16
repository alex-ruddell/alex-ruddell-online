"use client"

import Section from "./Section"
import HoverScrollButton from "./HoverScrollButton"
import Timeline from "./Timeline"

export default function About() {
  return (
    <Section
        id="about-section"
        className="max-w-5xl mx-auto px-6 py-28"
    >
      <div className="flex-1 xl:flex justify-between">
        <div className="min-w-[50%]">
          <h2 className="text-3xl font-bold mb-4">About Section</h2>
          <p className="text-gray-700">
            Some about content
          </p>
        </div>
        {/* TODO: Get this timeline looking a bit better. */}
        {/* <Timeline /> */}
      </div>
      
      <HoverScrollButton scrollToId="contact-section" />
    </Section>
  )
}