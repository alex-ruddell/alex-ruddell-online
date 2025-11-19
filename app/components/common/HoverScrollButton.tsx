"use client";

import { ArrowDown } from "lucide-react";

interface HoverScrollButtonProps {
  scrollToId: string;
  flip?: boolean;
}

export default function HoverScrollButton({ scrollToId, flip } : HoverScrollButtonProps) {
  const scrollToSectionId = () => {
    const section = document.getElementById(scrollToId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToSectionId}
      className="
        absolute left-1/2 bottom-6
        transform -translate-x-1/2 
        bg-white border border-gray-300 shadow-lg 
        p-3 rounded-full 
        hover:bg-gray-100 transition"
    >
      <ArrowDown className={`
        w-6 h-6 text-gray-700
        ${flip ? "scale-y-[-1]" : ""}
        `} />
    </button>
  )
}