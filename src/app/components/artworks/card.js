"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shadcomponents/ui/tooltip";

export default function Card({
  iiifUrl,
  title,
  category_titles = [],
  style_titles = [],
  artist_display = "",
  imageId,
}) {
  const [hasError, setHasError] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 500, height: 500 });
  const src = `${iiifUrl}/${imageId}/full/843,/0/default.jpg`;

  return (
    <div className="font-IBM font-medium hover:bg-gray-50 rounded-xl p-4 gap-2 flex flex-col hover:scale-105 transition-transform duration-500">
      <div className="w-full bg-gray-200 rounded-2xl overflow-hidden relative group">
        <button className="absolute text-lg top-4 right-4 bg-red-400 px-4 py-2 text-white rounded-md hover:bg-red-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          Pin Art
        </button>
        {!hasError ? (
          <Tooltip>
            <TooltipTrigger className="cursor-pointer">
              <Image
                src={src}
                alt={title || "Artwork"}
                width={imgSize.width}
                height={imgSize.height}
                className="w-full h-auto object-contain transition-all duration-200"
                onError={() => setHasError(true)}
                onLoad={({ target }) => {
                  const { naturalWidth, naturalHeight } = target;
                  setImgSize({ width: naturalWidth, height: naturalHeight });
                }}
              />
            </TooltipTrigger>
            <TooltipContent className="font-IBM text-md">
              Learn More...
            </TooltipContent>
          </Tooltip>
        ) : (
          <div className="w-full h-[300px] flex items-center justify-center text-gray-500 text-sm">
            Image not available
          </div>
        )}
      </div>

      <div className="font-normal p-1">
        <h1 className="font-playfair text-2xl font-semibold">{title}</h1>
        <h2 className="text-md">{artist_display}</h2>
        {category_titles.map((data, idx) => (
          <div className="text-sm" key={`cat-${idx}`}>
            {data}
          </div>
        ))}
        {style_titles.map((data, idx) => (
          <div className="text-sm" key={`style-${idx}`}>
            {data}
          </div>
        ))}
      </div>
    </div>
  );
}
