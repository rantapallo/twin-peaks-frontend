import CharacterItem from "./CharacterItem";

export default function CharacterGrid({chars, isLoading}) {
 
  // return isLoading ? (<Spinner />) : (
    return isLoading ? (<p>Loading...</p>) : (
    <section className="cards">
      {chars.map(char => (
        <CharacterItem key={char.charid} char={char} />
      ))}
    </section>
  );
}
