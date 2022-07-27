import React, {useState, useEffect} from 'react';
import axios from 'axios';



const Pokemon = () => {
    const [pokemon,setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {setPokemon(response.data.results)})
    }, []);

    return(
        <div>
            <h1>Pokemon:</h1>
            <div>
                {pokemon.map((pokemon,index) =>{return (<div key = {index}>{pokemon.name}</div>)} )}
            </div>
        </div>
    )




}

export default Pokemon;