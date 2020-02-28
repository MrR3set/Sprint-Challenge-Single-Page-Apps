import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  
  const [data,setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(() => {
axios
  .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
  .then(response => {
    const characters = response.data.results.filter(character =>
      character.name.toLowerCase().includes(query.toString().toLowerCase())
    );
    setData(characters);
  });
}, [query]);

  const handleQuery = q => {
      console.log("changing query to", q)
      setQuery(q);
  }

  return (
    <section className="character-list card-wrapper">        
      <SearchForm handleQuery={handleQuery}></SearchForm>
       {data.map(c => {
            return <CharacterCard key={c.id} data={c}/>
        })}   
    </section>
  );
}
