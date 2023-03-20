import React, { Component } from "react";

export default class coba extends Component {
  constructor() {
    super();
    this.state = { counter: 3 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement(){
    this.setState({counter: this.state.counter - 1});
  }
  render() {
    return (
        <><div> Baca </div><button onClick={this.increment}> +</button><button onClick={this.decrement}> -</button></>
    )
    
  }
}
