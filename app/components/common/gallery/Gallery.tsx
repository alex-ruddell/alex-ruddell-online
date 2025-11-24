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
  displayMobile?: boolean;
}

export default function Gallery() {
  const [items, setItems] = useState<ScrollingGalleryItem[]>([]);

  useEffect(() => {
    setItems(galleryData);
  }, []);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <>
      <div className="
        block lg:hidden w-full
        flex flex-col justify-between">
        <div className="flex flex-row gap-2 justify-between">
          {[...items]
            .filter(item => item.chipText == "project" && item.displayMobile)
            .map((item, idx) => (
            <HoverCard
              key={idx}
              className={`
                bg-white p-0.5 mt-4 w-[50%]
                flex items-center justify-center 
                text-gray-700 text-xl rounded-lg border border-gray-200
              `}
              overlayTextOnHover={item.imageAlt}
            >
              {item.imagePath ? (
                <img
                  src={item.imagePath}
                  alt={item.imageAlt}
                  className="object-cover rounded-lg p-1"
                />
              ) : (
                <div className="flex flex-col justify-between w-full h-full p-4">
                  {item.title && (
                    <p className="text-xl lg:text-lg pt-0.25 leading-tight focus:outline-none">
                      {item.title}
                    </p>
                  )}
                  <div>
                    {item.chipText && (
                      <span className="text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                        {item.chipText}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-900 mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.link && item.linkText && (
                    <div>
                      <a
                        className="link-underline mt-2 text-sm text-gray-600 italic"
                        href={item.link}
                        target="_blank"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </HoverCard>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          {[...items]
            .filter(item => item.imagePath !== undefined && item.displayMobile)
            .map((item, idx) => (
            <HoverCard
              key={idx}
              className={`
                bg-white p-0.5 mt-4 w-[33%]
                flex items-center justify-center 
                text-gray-700 text-xl rounded-lg border border-gray-200
              `}
              overlayTextOnHover={item.imageAlt}
            >
              {item.imagePath ? (
                <img
                  src={item.imagePath}
                  alt={item.imageAlt}
                  className="object-cover rounded-lg p-1"
                />
              ) : (
                <div className="flex flex-col justify-between w-full h-full p-4">
                  {item.title && (
                    <p className="text-xl lg:text-lg pt-0.25 leading-tight focus:outline-none">
                      {item.title}
                    </p>
                  )}
                  <div>
                    {item.chipText && (
                      <span className="text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                        {item.chipText}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-900 mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.link && item.linkText && (
                    <div>
                      <a
                        className="link-underline mt-2 text-sm text-gray-600 italic"
                        href={item.link}
                        target="_blank"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </HoverCard>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          {[...items]
            .filter(item => item.chipText == "profile" && item.displayMobile)
            .map((item, idx) => (
            <HoverCard
              key={idx}
              className={`
                bg-white p-0.5 mt-4 w-[50%]
                flex items-center justify-center 
                text-gray-700 text-xl rounded-lg border border-gray-200
              `}
              overlayTextOnHover={item.imageAlt}
            >
              {item.imagePath ? (
                <img
                  src={item.imagePath}
                  alt={item.imageAlt}
                  className="object-cover rounded-lg p-1"
                />
              ) : (
                <div className="flex flex-col justify-between w-full h-full p-4">
                  {item.title && (
                    <p className="text-xl lg:text-lg pt-0.25 leading-tight focus:outline-none">
                      {item.title}
                    </p>
                  )}
                  <div>
                    {item.chipText && (
                      <span className="text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                        {item.chipText}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-900 mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.link && item.linkText && (
                    <div>
                      <a
                        className="link-underline mt-2 text-sm text-gray-600 italic"
                        href={item.link}
                        target="_blank"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </HoverCard>
          ))}
        </div>
      </div>
      {/* Desktop */}
      <div
        className="hidden lg:block relative h-screen overflow-x-hidden p-8"
        onMouseLeave={toggleHover}
        onMouseEnter={toggleHover}
      >
        <div
          className={`
            animate-scroll-responsive
            flex flex-col
            ${hovered ? "paused" : ""}
          `}
        >
          {[...items, ...items].map((item, idx) => (
            <HoverCard
              key={idx}
              className={`
                bg-white mt-8 mx-0
                w-full min-w-0
                min-h-[100%]
                flex items-center justify-center 
                text-gray-700 text-xl rounded-lg border border-gray-200
              `}
              overlayTextOnHover={item.imageAlt}
            >
              {item.imagePath ? (
                <img
                  src={item.imagePath}
                  alt={item.imageAlt}
                  className="object-cover rounded-lg p-1"
                />
              ) : (
                <div className="flex flex-col justify-between w-full h-full p-4">
                  {item.title && (
                    <p className="text-xl lg:text-lg pt-0.25 leading-tight focus:outline-none">
                      {item.title}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-sm text-gray-900 mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.link && item.linkText && (
                    <div>
                      <a
                        className="link-underline mt-2 text-sm text-gray-600 italic"
                        href={item.link}
                        target="_blank"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  )}
                  {item.chipText && (
                    <span className="absolute top-4 right-4 text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2 py-1 rounded-md">
                      {item.chipText}
                    </span>
                  )}
                </div>
              )}
            </HoverCard>
          ))}
        </div>
      </div>
    </>
  );
}