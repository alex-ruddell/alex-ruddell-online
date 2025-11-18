"use client";

import HoverCard from "./HoverCard";
import { useState, useEffect } from "react";
import galleryData from "../../../data/gallery.json"
interface ScrollingGalleryItem {
  title: string;
  description: string;
  chipText: string;
  link: string;
  linkText: string;
  hasPicture: boolean;
}

export default function ScrollingGallery() {
  const [items, setItems] = useState<ScrollingGalleryItem[]>([]);

  useEffect(() => {
    setItems(galleryData);
  }, []);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="relative overflow-y-hidden h-screen px-8"
        onMouseLeave={toggleHover}
        onMouseEnter={toggleHover}>
      <div className="h-full">
        <div 
          className={`
            animate-scroll-vertical flex flex-col
            ${hovered ? "paused" : ""}
          `}>
          {[...items, ...items, ...items].map((item, idx) => (
            <HoverCard
              key={idx}
              className={`
                bg-white mt-8 h-42 w-full flex items-center justify-center 
                text-gray-700 text-xl rounded-lg border border-gray-200
              `}
            >
              {item.hasPicture 
                ? 
                <p>has picture</p> 
                :
                <div className="flex flex-col justify-between w-full h-full p-4">
                  {item.title && 
                    <p className="text-xl md:text-xl font-medium leading-tight focus:outline-none">
                      {item.title}
                    </p>
                  }
                  {item.description && 
                    <p className="text-base text-gray-900">
                      {item.description}
                    </p>
                  }
                  {item.link && item.linkText && 
                    <a className="mt-2 text-sm text-gray-600 italic" href={item.link} target="_blank">
                      {item.linkText}
                    </a>
                  }
                  {item.chipText && 
                    <span className="absolute top-4 right-4 text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                      {item.chipText}
                    </span>
                  }
                </div>
              }
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
}