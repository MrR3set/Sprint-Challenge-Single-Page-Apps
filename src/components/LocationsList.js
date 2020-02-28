import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";



export default function LocationsList() {

    const [data,setData] = useState([]);
    const [query, setQuery] = useState("");
 

    const params =useParams();

     
    useEffect(() => {
        const id = params.id;
        axios
          .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/?page=${id}`)
          .then(response => {
            const characters = response.data.results.filter(character =>
              character.name.toLowerCase().includes(query.toString().toLowerCase())
            );
            setData(characters);
          });
    }, [query]);
        
        const handleQuery = q => {
            setQuery(q);
        }
        return (
          <div>
            <Pagination></Pagination>   
            <section className="location-list card-wrapper">        
              <SearchForm handleQuery={handleQuery}></SearchForm>
               {data.map(c => {
                    return <LocationCard key={c.id} data={c}/>
                })}   
            </section> 
          </div>
            
          );

}


