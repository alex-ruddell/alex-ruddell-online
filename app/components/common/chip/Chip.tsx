import React from "react";
import Link from "next/link";

export type ChipProps = {
  href: string;
  className?: string;
  children?: React.ReactNode
};

const Chip: React.FC<ChipProps> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={
        `
        relative inline-flex items-center px-4 py-1.5 rounded-full text-sm
        font-medium cursor-pointer select-none overflow-hidden
        transition-all duration-300 border-2
        before:absolute before:inset-0 before:bg-white/20 before:opacity-0
        before:scale-0 before:rounded-full before:transition-transform
        before:duration-300 hover:before:opacity-100 hover:before:scale-150
        active:scale-95
        ${className}
        `
      }
    >
      {children}
    </Link>
  );
};

export default Chip;
