"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import Masonry from "react-masonry-css";
import Card from "../card";
import masonryStyles from "./masonry.module.css";
import CreateBoardButton from "../home/createBoardButton";
import FindFriends from "../home/findFriends";
import ExploreCard from "../home/exploreCard";

import { Skeleton } from "@/shadcomponents/ui/skeleton";

const exploreCards = [
  { title: "探索中國藝術", bgColor: "bg-red-300", fontClass: "font-tc" },
  {
    title: "日本美術を発見する",
    bgColor: "bg-yellow-300",
    fontClass: "font-jp",
  },
  { title: "한국 미술 탐험", bgColor: "bg-blue-300", fontClass: "font-kr" },
];

const fetchNewArtwork = async (pageNumber) => {
  const artwork = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=20`
  );
  const newArtwork = await artwork.json();
  return newArtwork;
};

export default function HomeWrapper({ awaitedArtworks, iiifUrl }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["artworks"],
    queryFn: ({ pageParam = 1 }) => fetchNewArtwork(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = lastPage.pagination.current_page;
      const totalPages = lastPage.pagination.total_pages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialData: { pages: [awaitedArtworks], pageParams: [1] },
  });

  const { ref, inView } = useInView();

  //Make it so When a New Page is Laoded It Fetcheds the Next Page
  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  console.log(status)
  return (
    <div className="p-4">
      <div>
        <input
          className="m-4 p-3 w-full hover:bg-gray-200 bg-gray-100 rounded-md"
          placeholder="Search"
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        <CreateBoardButton />
        <FindFriends />
        {exploreCards.map((card, index) => (
          <ExploreCard
            key={index}
            title={card.title}
            bgColor={card.bgColor}
            fontClass={card.fontClass}
          />
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={masonryStyles["my-masonry-grid"]}
        columnClassName={masonryStyles["my-masonry-grid_column"]}
      >
        {data?.pages.flatMap((page) =>
          page.data.map((item) => (
            <div key={item.id}>
              <Card
                iiifUrl={iiifUrl}
                title={item.title}
                category_titles={item.category_titles}
                style_titles={item.style_titles}
                imageId={item.image_id}
                artist_display={item.artist_display}
              />
            </div>
          ))
        )}
      </Masonry>

      {isFetchingNextPage && (
        <div className="p-4 text-center text-gray-500">Loading more...</div>
      )}

      <div ref={ref} />
    </div>
  );
}
