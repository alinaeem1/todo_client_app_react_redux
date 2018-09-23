import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  state = {};
  render() {
    return (
      <div className="wrapper_item">
        <button
          className="removeTodo"
          onClick={e => this.removeTodo(this.props.id)}
        >
          remove
        </button>
        {this.props.todo.text}
      </div>
    );
  }
}
