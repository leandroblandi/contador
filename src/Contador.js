import React from "react";

/**
 * Clase: App de conteo
 */
export default class Contador extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numero: 0
        }
    }
    // Método para incrementar el conteo
    sumarUno = () => {
        this.setState({
            numero: this.state.numero + 1
        });
    }

    // Método para decrementar el conteo
    restarUno = () => {
        if (this.state.numero === 0) {
            return;
        }
        this.setState({
            numero: this.state.numero - 1
        });
    }

    // Método para reiniciar el conteo
    borrarTodo = () => {
        this.setState({
            numero: 0
        });
    }
    render() {
        return(
            <div className="contador-react">
                <h1 className="titulo">Contador</h1>
                <p className="cantidad">{this.state.numero}</p>
                <button className="boton-suma" onClick={this.sumarUno}>+ 1</button>
                <button className="boton-resta" onClick={this.restarUno}>- 1</button>
                <button className="boton-reinicio" onClick={this.borrarTodo}>Borrar</button>
            </div>
        );
    }
}