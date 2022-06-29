import Spinner from "../Spinner";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList({episodes, isLoading}) {
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      {episodes && 
        episodes.map((episode) => (
          <EpisodeCard key={episode.episode} episode={episode} />
        ))
      }
    </div>
  )
}
