import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEnter from "./components/TodoEnter";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      nextId: 1
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(textForTodo) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: textForTodo });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container wrapper">
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
