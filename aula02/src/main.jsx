import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let site = "bem vindo ao meu site";

//APENAS DATA
//site = hoje.toLocaleDateString();
//INSERE HORA,MINUTO,SEGUNDO
//hoje.setHours(0,0,0);
//DATA E HORA
//site = hoje.toLocaleString();

//EXERCICIO DATA SEMANA
let hoje = new Date();
const semana = ["Domingo" ,"Segunda" ,"Terça" ,"Quarta" ,"Quinta" ,"Sexta" ];
let dia = hoje.getDay();
const diaSemana = semana[dia];
const texto = `Hoje é ${diaSemana} sim!`;
ReactDOM.render(texto, document.getElementById("root")); 


/*let nome, resposta;
nome = "";
resposta = nome || "braya"; //braya
resposta = nome && "braya"; //""
nome = "zando";
resposta = nome || "braya"; //zando
resposta = nome && "braya"; //braya*/

