import { useEffect, useState } from "react";

function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data =await res.json()
    //gets specific info from pokemon and stores on array
   setLoadMore(data.next)

   function createPokemonObject (result) {
     result.forEach( async (pokemon) => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data = await res.json()

       setAllPokemon(currentList => [...currentList, data])
     })
   }
   createPokemonObject(data.results)
   await console.log(allPokemon)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <div className="app-component">
      <h1> PokeDex</h1>
      <h2> Find your Pokemon</h2>
      <div className="pokemon-component">
        <div className="all-component">
          {allPokemon.map(pokemon => <li>{pokemon.name}</li>)}
        </div>
        <buttom className="load-more">Load More</buttom>
      </div>
    </div>
  );
}

export default App;
