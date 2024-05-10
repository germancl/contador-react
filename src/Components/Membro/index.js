import React, { Component } from "react";

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };

        this.enter = this.enter.bind(this);
    }

    enter(nameUser) {
        this.setState({ name: nameUser });
    }

    render() {
        return (
            <div>
                <h2>Bem-vindo(a) {this.state.name}</h2>
                <p>
                    <button onClick={() => this.enter('Germán')}>
                        Entrar como usuário
                    </button>
                </p>
                <button onClick={() => this.setState({ name: '' })}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;