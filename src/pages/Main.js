import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"


export default function Main() {
  const [quote, setQuote] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('https://twinpeaks-api.herokuapp.com/api/quotes')
      const data = await res.json()
      setIsLoading(false)
      return data
    } catch (error) {
        setError(error)
    }
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        setQuote(data)
      })
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="quote-container">
      {error && <p>{error}</p>}

      {quote && quote.quote &&
        <div className="quote-div">
          <div className="quote">"{quote.quote}"</div>
          <div className="quote-char">- {quote.character}</div>
        </div>
      }
    </div>
  )
}
