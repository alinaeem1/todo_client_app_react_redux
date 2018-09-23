import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEnter from "./components/TodoEnter";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Hello" },
        { id: 1, text: "yahoo" },
        { id: 2, text: "hi" }
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(textForTodo) {
    console.log("New Todo is Added: ", textForTodo);
  }

  removeTodo(id) {
    console.log("Todo removing: ", id);
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <TodoEnter textForTodo="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
