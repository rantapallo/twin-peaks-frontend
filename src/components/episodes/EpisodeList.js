import EpisodeCard from "./EpisodeCard";

export default function EpisodeList({episodes, isLoading}) {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {episodes && 
        episodes.map((episode) => (
          <EpisodeCard key={episode.episode} episode={episode} />
        ))
      }
    </div>
  )
}
