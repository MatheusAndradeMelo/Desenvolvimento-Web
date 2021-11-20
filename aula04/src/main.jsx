import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const prato_preferido = ["batataFrita", "lasanha", "lasanha","churrasco"];

function fn(prato) {
  return prato.toLowerCase().substr(0, "lasanha".length) == "lasanha";
}

const novo = prato_preferido.filter(fn);

ReactDOM.render(
  novo.length,
  document.getElementById('root')
)
