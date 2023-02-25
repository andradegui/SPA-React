import React from "react";

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


  return (
    pokemon.sprites ?

      <div className="container">
        <div className="row">

          <div className="col-5"> 
            <img src={pokemon.sprites.front_default} />
          </div>
          
          <h3>{pokemon.name}</h3>

          <hr className="mt-3 mb-3"></hr>

          <div>
            <p>Type:</p> 
            {pokemon.types.map((data) => 
              <div>{data.type.name}</div> 
            )}
          </div>

          <hr className="mt-3 mb-3"></hr>

          <div className="col-5">
            <p>Abilities:</p>
            {pokemon.abilities.map((data) => (
                <div>{data.ability.name}</div>
            ))}
          </div>

              <button onClick={Proximo}>Próximo</button>
              <button onClick={Anterior}>Anterior</button>
        </div>


        
      </div>
    :
      <div>
        <button onClick={Proximo}>Carregar</button>
      </div>
  );
}

export default App;
