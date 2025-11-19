"use client";

import { MousePointer } from "lucide-react";

export default function HeroTitle() {
  return (
    <div className="w-full flex items-center pb-16">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Kia Ora, I'm {" "}
        <span className="relative bg-yellow-300 px-2 py-1 rounded">
          Alex
        
          <MousePointer className="absolute text-gray-700 w-8 h-8 -right-5 -bottom-5 rotate-12 drop-shadow z-50" />
          
          <div className="absolute bottom-0 right-0 translate-x-full translate-y-full bg-white border border-gray-300 rounded-md shadow-lg w-40 text-sm font-medium text-gray-800 z-20">
            {/* <div 
              onClick={() => window.open("https://www.linkedin.com/in/alexrsruddell", "_blank")} 
              className="px-3 py-2 hover:bg-gray-100 cursor-default"
            >
              Look Up
            </div> */}
            {/* <div 
              onClick={() => window.open(".", "_blank")} 
              className="px-3 py-2 hover:bg-gray-100 cursor-default"
            >
              Copy
            </div> */}

            <div className="px-3 py-2 bg-gray-500/80 text-white cursor-default">
              Define…
            </div>

            <div 
              onClick={() => window.open("https://www.google.com/search?q=Alex+Ruddell+New+Zealand", "_blank")} 
              className="px-3 py-2 hover:bg-gray-100 cursor-default"
            >
              Search Google for “Alex”
            </div>
          </div>
        </span>
      </h1>
    </div>
  );
}
