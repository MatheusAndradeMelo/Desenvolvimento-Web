import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

/*var paragrafo = (
  <div>
    <p>Texto de paragrafo</p>
  </div>
);

var painel = <div id="painel">Conteúdo</div>

ReactDOM.render(paragrafo, document.getElementById('root'));*/

let nome = "Narutin";
let elemento = <p>Boa noite {nome.length + "!"}</p>;
//let elemento = <p>Boa noite {`molekote ${nome}`}</p>;

ReactDOM.render(elemento, document.getElementById('root'));
