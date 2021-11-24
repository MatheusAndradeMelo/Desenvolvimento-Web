import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cliente from "./cliente";

function App() {
  
    const listaClientes = [
      { id: 1, email: "slpcamilla@gmail.com", nomeUsuario: "gemeo123", nomeCompleto: "irmao gemeo",
      senha: "naosei", cpf: "42713630061", telefone: "22999889988", numero: "10",
      complemento: "casa", dataNascimento: "1990-04-07", endereco: "cep : 27974762"},
      { id: 2, email: "77matheus@gmail.com", nomeUsuario: "Matheus", nomeCompleto: "Matheus Andrade",
      senha: "qualquercoisa", cpf: "12345678910", telefone: "11992244558", numero: "7",
      complemento: "casa", dataNascimento: "1999-09-03", endereco: "cep : 25976475" },
      {id: 3, email: "alguem@gmail.com", nomeUsuario: "alguem", nomeCompleto: "alguem por ai",
      senha: "desconheco", cpf: "32567770051", telefone: "229993489977", numero: "8",
      complemento: "apartamento", dataNascimento: "1992-05-08", endereco: "cep: 23972477"},
    ];

    const lst = listaClientes.map((cliente) => {
      cliente.texto = cliente.email ? "email cadastrado!" : "tente novamente";
      return cliente;
    });

    const [lista, setLista] = useState(lst);

    const handle = () => {
      let nome = prompt("Insira um email: ");
      let novo = { id: lista.length + 1, nome, email: true };
      let arr = [...lista];
      arr.push(novo);
      setLista(arr);
    };

    const modificar = (id) => {
      /*
      const cliente = lista.find(function procura(item) {
        if (item.id == id) return true;
      });
      if (!cliente) return;
      cliente.email = !cliente.email;
      let arr = [...lista, cliente];
      setLista(arr);
      */
  
      const arr = lista.map((item) => {
        if (item.id == id) item.email = !item.email;
        return item;
      });
      setLista(arr);
    };

    const remover = (id) => {
      const arr = lista.filter((item) => item.id !== id);
      setLista(arr);
    };

    return (
      <div className="App">
        <h1>Clientes</h1>
  
        <ol>
          {lista.map((cliente) => (
            <div>
              <Cliente
                key={cliente.id}
                Cliente={cliente}
                eventoModificar={() => modificar(cliente.id)}
                eventoApagar={() => remover(cliente.id)}
              />
              {/*            <button onClick={() => modificar(cliente.id)}>Modificar</button>
              <button onClick={() => remover(cliente.id)}>Apagar</button>
          **/}
            </div>
          ))}
        </ol>
  
        <button onClick={handle}>Inserir novo cliente</button>
      </div>
    );

  
}

export default App
