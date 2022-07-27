import React, {useState, useEffect} from 'react';



const Pokemon = () => {
    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return(
        <div>
            <div>
                {pokemon.map((pokemon,index) =>{return (<div key = {index}>{pokemon.name}</div>)} )}
            </div>
        </div>
    )




}

export default Pokemon;