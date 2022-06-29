import { useState } from "react"
import { dateFormatter } from "../../util/util"

export default function EpisodeCard({episode}) {

  const [open, setOpen] = useState('episode-content hidden')

  const toggleDetails = () => {
    open === 'episode-content' ? setOpen('episode-content hidden') : setOpen('episode-content')
  }

  return (
    <div className="episode-card" onClick={toggleDetails}>
      <div className="episode-header">
        <div>
          <p>
            Season {episode.season} Episode {episode.no_in_season}
          </p>
          <p>
            Episode title: {episode.title} - {episode.title_additional}
          </p>
        </div>
        <div>
          <p>Original air date: {dateFormatter(episode.original_air_date)}</p>
        </div>
      
      </div>
      <div className={open} >
        <div>
          <div>
            Directed by: {episode.directed.map((director, idx) => {
              let directed = idx === 0 ? `${director}` : `, ${director}`
              return directed
            })}
          </div>
          <div>
            Written by: {episode.written.map((writer, idx) => {
              let written = idx === 0 ? `${writer}` : `, ${writer}`
              return written
            })}
          </div>
        </div>
        <div className="episode-summary">
          {episode.summary}
        </div>
      </div>
      
    </div>
  )
}
