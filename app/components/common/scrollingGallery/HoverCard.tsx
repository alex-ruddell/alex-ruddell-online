"use client";
import { useState } from "react";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = ""} : HoverCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`
          transition-all duration-300
          ${hover ? "scale-120 shadow-lg z-60": "scale-100 shadow-sm"}
          ${className}
          `}
      >
      {children}
    </div>
  );
}