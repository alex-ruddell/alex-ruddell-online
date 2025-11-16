"use client";

import { useState } from "react";

interface TimelineCardProps {
  children: React.ReactNode;
  date: string;
  title: string;
  description: string;
  className?: string;
}

export default function TimelineCard({ children, date, title, description, className = ""}: TimelineCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`
          transition-transform duration-300
          ${hover ? "scale-120 shadow-xl z-60": "scale-100"}
          ${className}
          `}
      >
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-800 mt-2">
          {title}
        </p>

        <div
          className={`
            overflow-hidden transition-all duration-300 
            ${hover ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
            `}
        >
          <p className="text-sm text-gray-800">
            {description}
          </p>
        </div>
      </div>

      {/* Grey background on hover */}
      <div className={`
        fixed inset-0 z-50 pointer-events-none
        transition-colors duration-300
        ${hover ? "bg-black/50" : ""}
        `}
      >
      </div>
    </>
  );
}