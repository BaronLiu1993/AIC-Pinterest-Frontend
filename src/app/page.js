import HomeWrapper from "./components/artworks/clientwrapper/homewrapper";

export default async function Home() {
  const artworks = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=2&limit=30`
  );
  const awaitedArtworks = await artworks.json();
  const iiifUrl = awaitedArtworks.config.iiif_url;
  return (
    <>
      <HomeWrapper awaitedArtworks={awaitedArtworks} iiifUrl={iiifUrl} />
    </>
  );
}
