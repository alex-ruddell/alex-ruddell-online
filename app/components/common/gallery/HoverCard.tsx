"use client";
import { useState } from "react";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  overlayTextOnHover?: string;
}

export default function HoverCard({ children, className = "", overlayTextOnHover = ""} : HoverCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`
        relative overflow-hidden
        transition-all duration-300
        ${hover ? "scale-120 shadow-lg z-60": "scale-100 shadow-sm z-50"}
        ${className}
        `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      
      {children}

      {overlayTextOnHover && (
        <div
          className={`
            absolute inset-0 
            bg-black/60 
            opacity-0 
            flex items-center justify-center 
            text-white text-center p-4
            transition-all duration-300 
            hover:
            ${hover ? "opacity-75 scale-120 z-60": "scale-100"}
          `}
        >
          <p className="text-xl lg:text-lg pt-0.25 leading-tight focus:outline-none">
            {overlayTextOnHover}
          </p>
        </div>
      )}
    </div>
  );
}