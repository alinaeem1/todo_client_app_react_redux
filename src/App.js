import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEnter from "./components/TodoEnter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <TodoEnter />
        </div>
      </div>
    );
  }
}

export default App;
