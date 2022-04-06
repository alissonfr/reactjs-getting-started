import React, {useEffect, useState} from 'react';
import api from './services/api';

export default function App() {
  const [user, setUser] = useState();

//useEffect(() => {      EXEMPLO DE REQUISIÇÃO FEITA COM POST
//  api
//    .post("https://minhaapi/novo-usuario",{
//          nome: “Romulo”,
//          sobrenome: “Sousa”
// })

  useEffect(() => {
    api
      .get("/users/alissonfr")
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Um erro aconteceu: " + err)
      });
  }, []);

  return (
  <div className="App">
    <p>Olá {user?.name}!</p>
    <p>Usuário: {user?.login}</p>
    <p>Você tem {user?.followers} seguidores</p>
    <p>Você mora em {user?.location}</p>
  </div>
  )
}