import React, { Component } from 'react'


export default class TodoList extends Component {
  removeItem(idx) {
    this.props.removeItem(idx);
  }
  render() {
    return (
      <ul style={{ padding: '0' }}>
        {this.props.items.map((item, i) => {
          return <li style={{ listStyle: 'none' }} className="d-flex justify-content-between" key={item.id}> <span>{i + 1 + ')'}</span> {item.text} <i onClick={() => { this.removeItem(item.idx) }} style={{ cursor: 'pointer' }} className="fas fa-trash-alt"></i></li>
        })}
      </ul>
    )
  }
}