import React from "react";
import CardPokemon from "./components/pokemon";

function App() {

  const [pokemon, setPokemon] = React.useState({});
  const [count, setCount] = React.useState(1);

  function Proximo(){
    setCount(count + 1);
    Carregar();
  }

  function Anterior(){
    if(count > 1){
      setCount(count - 1);
      Carregar();
  
    }
  }

  function Carregar() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`) //busca na net
    //quando terminar de buscar faz o que estar no then  
    .then(response =>  response.json() ) //response tem os dados da pesquisa e convertendo os dados p/ JSON
    .then((data) => { //outro then (promessa) pra dar tempo do JS converter o JSON
      console.log(data);
      setPokemon(data);
    }) 
  }


  return pokemon.sprites ? (

      <div className="container">
        <CardPokemon>
          image={pokemon.sprites.front_default}
          name={pokemon.name}
          type={pokemon.type}
          abilitie={pokemon.abilitie}
        </CardPokemon>

        <button className="mt-3" onClick={Proximo}>Próximo</button>
        <button className="mt-3" onClick={Anterior}>Anterior</button>
        
      </div>

  ) : (

      <div>
        <button onClick={Proximo}>Carregar</button>
      </div>

  );
}

export default App;
