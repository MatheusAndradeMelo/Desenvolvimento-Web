import React from "react";

class BemVindo extends React.Component {
    constructor (props) {
        super (props);
        this.state = { nome: "Flamengo", contador: 0 };
    }

    manipulador = () ==> {
        let novo = {
            contador: this.state.contador + 1,
        };
        this.setState(novo);
    };
       

    render(){
        return (
            <div>
                <h2>Coee visitante {this.state.nome}</h2>
                <h3>Voce ja acessou {this.state.contador} vezes</h3>
                <button onClick= {this.manipulador}>Aumentar</button>
            </div>
         );
    }
}

export default BemVindo;