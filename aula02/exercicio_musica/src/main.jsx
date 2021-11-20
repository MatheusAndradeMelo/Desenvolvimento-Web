import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const musicas = ["Recairei", "Esquema preferido", "Amor de despedida", "Zero saudade", "Unha de gel"];
const listMusica = musicas.map((musica) => <li key={musica}>{musica}</li>);

ReactDOM.render(
  <ul>{listMusica}</ul>,
  document.getElementById('root')
)
