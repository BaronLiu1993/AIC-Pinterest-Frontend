"use client";

import Masonry from "react-masonry-css";
import Card from "../card";
import masonryStyles from "./masonry.module.css";
import CreateBoardButton from "../home/createBoardButton";
import FindFriends from "../home/findFriends";
import ExploreCard from "../home/exploreCard";

const exploreCards = [
  {
    title: "探索中國藝術",
    bgColor: "bg-red-300",
    fontClass: "font-tc",
  },
  {
    title: "日本美術を発見する",
    bgColor: "bg-yellow-300",
    fontClass: "font-jp",
  },
  {
    title: "한국 미술 탐험",
    bgColor: "bg-blue-300",
    fontClass: "font-kr",
  },
];

export default function HomeWrapper({ awaitedArtworks, iiifUrl }) {
  const artWorks = awaitedArtworks.data.map((data) => (
    <div key={data.id}>
      <Card
        iiifUrl={iiifUrl}
        title={data.title}
        category_titles={data.category_titles}
        style_titles={data.style_titles}
        imageId={data.image_id}
        artist_display={data.artist_display}
      />
    </div>
  ));

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <div className="p-4">
        <div>
          <input
            className="m-4 p-3 w-full hover:bg-gray-200 bg-gray-100 rounded-md"
            placeholder="Search"
          />
        </div>
        <div className="m-4 flex gap-4">
          <CreateBoardButton />
          <FindFriends />
          <div className="flex gap-4 flex-wrap">
            {exploreCards.map((card, index) => (
              <ExploreCard
                key={index}
                title={card.title}
                bgColor={card.bgColor}
                fontClass={card.fontClass}
              />
            ))}
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={masonryStyles["my-masonry-grid"]}
          columnClassName={masonryStyles["my-masonry-grid_column"]}
        >
          {artWorks}
        </Masonry>
      </div>
    </>
  );
}
