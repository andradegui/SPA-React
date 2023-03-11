import React from 'react';

function App() {  

const [usuario, setUsuario] = React.useState();  
const [senha, setSenha] = React.useState();  
const [userLogado, setUserLogado] = React.useState();  

function Login(){

  if(usuario == "Gui"){
    setUserLogado("Gui");
  }

}

if(userLogado){

  return (

    <div>
      <h3>Bem Vindo {usuario}!</h3>
      <button onClick={() => setUserLogado("")}>Logout</button>
    </div>

  )

} else {

  return (

    <div>
      Usuario: <input type="text" onChange={(e) => setUsuario(e.target.value)} />    
      Senha: <input type="text" onChange={(e) => setUsuario(e.target.value)} />    

      <button onClick={Login}>Cadastrar</button>
    </div> 

  )
}
 
}
export default App;