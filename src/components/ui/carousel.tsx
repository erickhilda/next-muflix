"use client";

import Link from "next/link";
import React, { useRef } from "react";
import MediaCard from "./media-card";

function Carousel({ items, title }: { items: any[]; title: string }) {
  const scrollEl = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    scrollEl.current?.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    scrollEl.current?.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  }
  return (
    <>
      {/* carousel content */}
      <div className="flex py-3 px-10 items-center mt-5">
        <div className="text-2xl">{title}</div>
        <div className="flex-auto"></div>
        <div className="text-lg text-white/70">
          <Link href="/movies">See all</Link>
        </div>
      </div>
      <div className="relative">
        <div ref={scrollEl} className="overflow-y-auto">
          <div className="flex gap-2 w-max p-2 px-10">
            {items.map((item) => (
              <MediaCard
                key={item.imdbID}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* button to scroll */}
        <button
          className="absolute h-full flex flex-col top-0 left-0 bg-black/50 items-center justify-center p-3 opacity-0 hover:opacity-100 transition z-20"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="absolute h-full flex flex-col top-0 right-0 bg-black/50 items-center justify-center p-3 opacity-0 hover:opacity-100 transition z-20"
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Carousel;
