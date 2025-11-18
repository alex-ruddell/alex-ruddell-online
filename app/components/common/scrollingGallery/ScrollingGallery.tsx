"use client";

import HoverCard from "./HoverCard";
import { useState, useEffect } from "react";
import galleryData from "../../../data/gallery.json"

interface ScrollingGalleryItem {
  title?: string;
  description?: string;
  chipText?: string;
  link?: string;
  linkText?: string;
  imagePath?: string;
  imageAlt?: string;
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
                bg-white mt-8 w-full flex items-center justify-center overflow-hidden
                text-gray-700 text-xl rounded-lg border border-gray-200
              `}
              overlayTextOnHover={item.imageAlt}
            >
              {item.imagePath 
                ? 
                <img
                  src={item.imagePath}
                  alt={item.imageAlt}
                  className="object-cover rounded-lg p-1" />
                :
                <div className="flex flex-col justify-between w-full h-full p-4">
                  {item.title && 
                    <p className="text-xl md:text-lg pt-0.25 leading-tight focus:outline-none">
                      {item.title}
                    </p>
                  }
                  {item.description && 
                    <p className="text-sm text-gray-900 mt-2">
                      {item.description}
                    </p>
                  }
                  {item.link && item.linkText && 
                    <div> {/* div to encompass underline */}
                      <a className="link-underline link-underline-black mt-2 text-sm text-gray-600 italic" href={item.link} target="_blank">
                        {item.linkText}
                      </a>
                    </div>
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