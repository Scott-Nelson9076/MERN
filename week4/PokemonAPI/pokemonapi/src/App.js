import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon'
import React, {useState, useEffect} from 'react'

function App() {
  const [pokemon,setPokemon] = useState([]);
  return (
    <div className="App">
      <Pokemon pokemon = {pokemon} setPokemon = {setPokemon} />
    </div>
  );
}

export default App;
