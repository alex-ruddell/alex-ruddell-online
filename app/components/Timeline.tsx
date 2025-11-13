"use client";

import { useEffect, useState } from "react";
import timelineData from "../data/timeline.json";

interface TimelineEvent {
  date: string;
  description: string;
}

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setEvents(timelineData);
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative flex items-center py-12 min-w-max px-10">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded-full transform -translate-y-1/2"></div>

        {events.map((event, index) => {
          const date = new Date(event.date);
          const year = date.getFullYear();
          const isAbove = index % 2 === 0;

          return (
            <div
              key={event.date}
              className="relative flex flex-col items-center mx-12"
            >
              {/* Connector line */}
              <div
                className={`absolute w-1 bg-gray-300 ${
                  isAbove
                    ? "bottom-1/2 h-10 translate-y-2"
                    : "top-1/2 h-10 -translate-y-2"
                }`}
              ></div>

              {/* Node */}
              <div className="z-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

              {/* Label */}
              <div
                className={`absolute w-40 text-center ${
                  isAbove ? "bottom-20" : "top-20"
                }`}
              >
                <p className="font-semibold text-gray-800">{year}</p>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              </div>
            </div>
          );
        })}

        {/* End marker for current date */}
        <div className="relative flex flex-col items-center mx-12">
          <div className="z-10 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
          <div className="absolute top-10 text-center">
            <p className="font-semibold text-gray-800">{currentYear}</p>
            <p className="text-sm text-gray-600 mt-1">Current Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
