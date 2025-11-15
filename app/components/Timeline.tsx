"use client";

import { useEffect, useState } from "react";
import timelineData from "../data/timeline.json";

interface TimelineEvent {
  date: string;
  description: string;
}

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    setEvents(timelineData);
  }, []);

  return (
    <div className="py-20 relative">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" />

      <div className="flex flex-col gap-20 relative">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={event.date}
              className={`
                relative w-full flex
                ${isLeft ? "justify-start" : "justify-end"}
              `}
            >

              {/* Node card */}
              <div
                className={`
                  bg-gray-100 border border-gray-300 rounded-lg
                  shadow-sm p-3 w-[45%]
                  ${isLeft ? "mr-auto" : "ml-auto"}
                `}
              >
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-800 mt-2">
                  {event.description}
                </p>
              </div>

              {/* Dot */}
              <div
                className="
                  absolute top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-2 h-2 rounded-full bg-gray-800
                "
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
