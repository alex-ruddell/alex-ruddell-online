import React from "react";
import Chip from "./Chip";


export default function ContactChipList() {
  const chips = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexrsruddell/",
      className: "bg-white hover:bg-blue-700 text-blue-700 hover:text-white border border-blue-700",
    },
    {
      label: "Github",
      href: "https://github.com/alex-ruddell",
      className: "bg-white hover:bg-black text-black hover:text-white border border-black",
    },
    {
      label: "E-mail",
      href: "mailto:imalexruddell@gmail.com",
      className: "bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-600",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {chips.map((chip, i) => (
        <Chip key={i} {...chip} />
      ))}
    </div>
  );
};