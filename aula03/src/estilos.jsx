import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

{/*function manipulador(){
  alert("clicou");
}*/}
let estilo = {
  margin: "20px",
  background: "tomato",
  color: "#fff"
};

let estilo2 = {
  margin: "20px",
  background: "green",
  color: "#fff"
};

let botao = <button style={estilo}>Clique aqui</button>;
let bot2 = <button style={estilo2}>Clique dois</button>;
{/*let botao = <button onClink={manipulador}>Clique aqui</button>;*/}

const menu = [botao, bot2];
ReactDOM.render(
  menu,
  document.getElementById('root')
)
