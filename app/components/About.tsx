"use client"

import Section from "./common/Section"

export default function About() {
  return (
    <Section
        id="about-section"
        className="max-w-5xl mx-auto px-6 py-28"
    >
      <div className="flex-1 xl:flex justify-between">
        <div className="min-w-[50%]">
          <h2 className="text-3xl font-bold mb-4">More about me...</h2>
          {/* <p className="text-gray-700 text-lg leading-relaxed">
            Alex Ruddell is Backend Software Engineer hailing from Auckland, New Zealand. After obtaining a Bachelor of Mechatronics Engineering at the end of
            2021, Alex transitioned into the world of software engineering.
          </p> */}
          <p className="text-gray-700">
            I'm a New Zealand-based software engineer building next generation ski field software with Intouch Technology Group!
            <br />
            <br />
            With strong technical design and development skills, and a deep passion for people and culture - I'm one of the most positive and excited software engineers you've ever met!
            <br />
            <br />
            Sound interesting? Keep reading...
            <br />
            <br />
            I enjoy combining my passion for software design and development with my strong focus on people and culture to be a valuable addition to the teams I work in. Working with kind, supportive, and passionate humans is an absolute must for me, and is what I strive to provide for the people I work with.
            <br />
            <br />
            Whenever I have spare time, I enjoy running, snowboarding, and engaging with nature in our beautiful New Zealand backyard. I also love chatting (almost too much), get in contact if you want to spin a yarn!
          </p>
        </div>
        {/* TODO: Get this timeline looking a bit better. */}
        {/* <Timeline /> */}
      </div>

      <br />

      <h2 className="text-2xl font-bold mb-4">Get in touch!</h2>
      <p className="text-gray-700">
        If you want to get in contact with me, don't hesitate to reach out!
      </p>
    </Section>
  )
}