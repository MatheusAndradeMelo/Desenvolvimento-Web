function Cliente(props) {
    const { cliente, eventoModificar } = props;
    const eventoApagar = props.eventoApagar;
  
    const estilo = { background: "yellow", margin: "20px", listStyle: "none" };
    estilo.background = cliente.email ? "purple" : "yellow";
  
    return (
      <li style={estilo}>
        {cliente.email} = {cliente.email ? "✔️" : "❌"}
        <br />
        <a href="#" onClick={eventoModificar}>
          Marcar como {!cliente.email ? "✔️" : "❌"}
        </a>{" "}
        |{" "}
        <a href="#" onClick={props.eventoApagar}>
          Apagar
        </a>
      </li>
    );
  }
  
  export default Cliente;