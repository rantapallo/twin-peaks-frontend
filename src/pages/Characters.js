import { useEffect, useState } from "react"
import CharacterGrid from "../components/characters/CharacterGrid";
import Search from "../components/characters/Search";

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [filteredChars, setFilteredChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('https://twinpeaks-api.herokuapp.com/api/characters')
      const data = await res.json()
      setIsLoading(false)
      return data
    } catch (error) {
        setError(error)
    }
  }

  const filterNames = (query) => {
    const filteredNames = chars.filter((char)=>{ 
      return char['character'].toLowerCase().includes(query)
    })
    return filteredNames
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        setChars(data)
        setFilteredChars(data)
      })
  }, [])

  useEffect(() => {
    const filtered = filterNames(query)
    setFilteredChars(filtered)
    // eslint-disable-next-line
  },[query])

  return (
    <div>
      {error && <p>{error}</p>}
      {chars && 
        <>
          <Search getQuery={(q) => setQuery(q)} />
          <CharacterGrid chars={filteredChars} isLoading={isLoading} />
        </>
      }
      
      </div>
  )
}
