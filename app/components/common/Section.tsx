"use client";

import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const baseClasses = "snap-start h-screen relative";
  
  return (
    <section
      id={id}
      className={`${baseClasses} ${className}`.trim()}
    >
      {children}
    </section>
  );
}