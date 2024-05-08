import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'Clique para aumentar ou diminuir',
      count: 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let state = this.state;
    state.count += 1;
    state.status = 'Você está aumentando';
    this.setState(state);

    if (state.count === 0) {
      state.status = 'Estamos em 0';
    } else if (state.count > 7) {
      state.status = 'Você já aumentou bastante, não acha?';
    }
  }

  decrease() {
    let state = this.state;
    state.status = 'Você está diminuindo';
    state.count -= 1;
    this.setState(state);

    if (state.count === 0) {
      state.status = 'Estamos em 0';
    } else if (state.count < -7) {
      state.status = 'Você já diminuiu bastante. Quer dar uma aumentadinha? :)';
    }
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.status}


        <h3>
          <button onClick={this.decrease}>-</button>
          {this.state.count}
          <button onClick={this.increase} >+</button>
        </h3>
      </div>
    );
  }
}

export default App;