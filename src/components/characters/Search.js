import { useState } from 'react'

const Search = ({getQuery}) => {

  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }

  return (
    <div className="search">
      <form>
        <input 
          type="text" 
          className="search-input" 
          value={text} 
          onChange={(e) => onChange(e.target.value)} 
          placeholder="Search characters" 
          autoFocus 
        />
      </form>
      
    </div>
  )
}

export default Search
