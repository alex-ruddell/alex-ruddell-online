import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Next content section for arrow to jump to */}
      <section
        id="next-section"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        <h2 className="text-3xl font-bold mb-4">Next Section</h2>
        <p className="text-gray-700">
          This is the next section the arrow scrolls to. Add whatever
          content you want here.
        </p>
        <Timeline />
      </section>
    </>
  );
}
