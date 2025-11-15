import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Section from "./components/Section";
import HoverScrollButton from "./components/HoverScrollButton";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="about-section"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        <h2 className="text-3xl font-bold mb-4">About Section</h2>
        <p className="text-gray-700">
          Some about content
        </p>
        <Timeline />
        <HoverScrollButton scrollToId="contact-section" />
      </Section>

      <Section
        id="contact-section"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
        <p className="text-gray-700">
          Some contact content
        </p>
      </Section>
    </>
  );
}
