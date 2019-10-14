import React, { Component } from 'react'
import TodoList from './todoList';
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>YAPILACAKLAR</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Ne yapılması gerekiyor?</label>
          <input id="new-todo" type="text" value={this.state.text} onChange={this.handleChange} />
          <button>
            Ekle {this.state.items.length + 1}
          </button>

        </form>
      </div >
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: this.state.items.concat(newItem),
      text: ''
    }))

  }
}

export default TodoApp;