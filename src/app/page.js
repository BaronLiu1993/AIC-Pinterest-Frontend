import HomeWrapper from "./components/artworks/clientwrapper/homewrapper";

export default async function Home() {
  //Initial Loading of 
  const artworks = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=1&limit=20`
  );
  const initialArtworks = await artworks.json();
  const iiifUrl = initialArtworks.config.iiif_url;
  return (
    <>
      <HomeWrapper awaitedArtworks={initialArtworks} iiifUrl={iiifUrl}/>
    </>
  );
}
