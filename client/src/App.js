import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    response: {},
  };

  componentDidMount() {
    fetch("/api/v1/say-something").then((res) => {
      const response = res.json();
      this.setState({ response });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;
