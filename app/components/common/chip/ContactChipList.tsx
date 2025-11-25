import React from "react";
import Chip from "./Chip";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactChipList() {
  return (
    <div className="flex flex-row flex-wrap gap-3 justify-center">
      <Chip 
        key="linkedin" 
        href="https://www.linkedin.com/in/alexrsruddell/" 
        className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white border border-blue-700">
        <Linkedin /><span className="ms-2">alexrsruddell</span>
      </Chip>
      <Chip 
        key="github" 
        href="https://github.com/alex-ruddell" 
        className="bg-white hover:bg-black text-black hover:text-white border border-black">
        <Github /><span className="ms-2">alex-ruddell</span>
      </Chip>
      {/* <Chip 
        key="email" 
        href="mailto:me@alex-ruddell-online.com" 
        className="bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-600">
        <Mail /><span className="ms-2">me@alex-ruddell-online.com</span>
      </Chip> */}
    </div>
  );
};