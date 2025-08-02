"use client";

import Masonry from "react-masonry-css";
import Card from "../card";
import masonryStyles from "./masonry.module.css";

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
      <div className = "p-4">
        <div>
        <input className = "m-4 p-3 w-full hover:bg-gray-200 bg-gray-100 rounded-md" placeholder = "Search"/>

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
