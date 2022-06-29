import { useEffect, useState } from "react"
import EpisodeCard from "../components/episodes/EpisodeList"

export default function Episodes() {
  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (param) => {
    try {
      setIsLoading(true)
      const res = await fetch('https://twinpeaks-api.herokuapp.com/api/'+param)
      const data = await res.json()
      setIsLoading(false)
      return data
    } catch (error) {
        setError(error)
    }
  }

  const selectList = (val) => {
    let fetchParam = ''
    switch (val) {
      case 'all':
        fetchParam = 'episodes'
        break;
      case '1':
        fetchParam = 'episodes/season/1'
        break;
      case '2':
        fetchParam = 'episodes/season/2'
        break;
      case '3':
        fetchParam = 'episodes/season/3'
        break;
      default:
        fetchParam = 'episodes'
    }

    fetchData(fetchParam)
      .then((data) => {
        setEpisodes(data)
      })
  }

  useEffect(() => {
    fetchData('episodes')
    .then((data) => {
      setEpisodes(data)
    })
  }, [])

  return (
    <div>
      <div>
        <select className="episode-select" onChange={(e) => {selectList(e.target.value)}}>
          <option value="all">All Episodes</option>
          <option value="1">Season 1</option>
          <option value="2">Season 2</option>
          <option value="3">Season 3</option>
        </select>
      </div>
      <div>
        {error && <p>{error}</p>}
        {episodes &&
          <EpisodeCard episodes={episodes} isLoading={isLoading} />
        }
      </div>
    </div>
  )
}
