import CharacterItem from "./CharacterItem";
import Spinner from '../Spinner'

export default function CharacterGrid({chars, isLoading}) {
 
  if (isLoading) {
    return <Spinner />
  }
   
  return (
    <section className="cards">
      {chars.map(char => (
        <CharacterItem key={char.charid} char={char} />
      ))}
    </section>
  )
}
