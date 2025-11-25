"use client"

import Section from "./common/Section"
import ContactChipList from "./common/chip/ContactChipList"

export default function About() {
  
  return (
    <Section
        id="about-section"
        className="w-full max-w-3xl lg:max-w-7xl my-4 px-12 lg:px-24"
    >
      <div className="p-6 bg-white rounded-lg border border-gray-200">
        <div className="flex-1 xl:flex justify-between">
          <div className="min-w-[50%]">
            <h2 className="text-3xl mb-6">More about me...</h2>

            <div className="flex flex-col text-gray-700 space-y-4">
              <p>
                Thanks for visiting my website! As you may have gathered by now, I am a backend-focused software engineer currently based out of Auckland, New Zealand. 
                I am moving to London in March 2026 to pursue new adventures, take on new challenges, and make lots of new memories.
              </p>
              <p>
                I am a strong communicator who deeply enjoys the collaborative, team-based environments that modern software development has cultivated. 
                I enjoy combining my passion for people, strong eye for detail, and an even stronger work ethic, to solve problems and deliver high quality solutions to problems of all shapes and sizes!
              </p>
              <p>
                Whenever I have spare time, I enjoy running, lifting, snowboarding, and being outside engaging with nature.
                I also love chatting, so get in contact if you want to spin a yarn!
              </p>

              <div className="flex justify-center">
                <ContactChipList />
              </div>
            </div>
          </div>

          {/* TODO: Get this timeline looking a bit better. */}
          {/* <Timeline /> */}
        </div>
      </div>
    </Section>
  )
}