import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map(item => (
            <li key={item.Id}>{item.text}</li>
          ))
        }
      </ul>
    )
  }
}