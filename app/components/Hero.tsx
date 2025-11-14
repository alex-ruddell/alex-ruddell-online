"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Alex Ruddell
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies, nunc id feugiat placerat, enim sapien elementum orci, id
          tristique metus lorem in nunc. Integer varius, massa sed consequat
          consequat, eros purus pretium leo, nec varius augue magna vel risus.
        </p>
      </div>

      <div className="mt-10 md:mt-0 md:ml-12">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-lg">
          <Image
            src="/main.jpg"
            alt="Hero Image"
            className="object-cover"
            priority
            width={250}
            height={250}
            />
        </div>
      </div>

      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="
          absolute left-1/2 bottom-6 
          transform -translate-x-1/2 
          bg-white border border-gray-300 shadow-lg 
          p-3 rounded-full 
          hover:bg-gray-100 transition
        "
      >
        <ArrowDown className="w-6 h-6 text-gray-700" />
      </button>
    </section>
  );
}
