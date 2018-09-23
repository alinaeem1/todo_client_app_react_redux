import React, { Component } from "react";

import "./TodoEnter.css";

export default class TodoEnter extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "test" };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange() {
    console.log("you change something");
  }

  addTodo(todo) {
    console.log("Todo: ", todo);
  }
  render() {
    return (
      <div>
        <input type="text" value="" onChange={this.handleChange} />
        <button
          className="btn btn-primary"
          onClick={() => this.addTodo(this.state.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}
