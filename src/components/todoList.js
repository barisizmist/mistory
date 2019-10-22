import React, { Component } from 'react'


export default class TodoList extends Component {
  removeItem(id) {
    this.props.removeItem(id);
  }
  handleCheck(id) {
    this.props.handleCheck(id);
  }

  render() {
    const items = this.props.items;
    return (
      <ul style={{ padding: '0' }} className="mb-4">
        {
          items.length === 0 &&
          <p>No item todo</p>
        }
        {items.map((item, i) => {
          return <li style={{ listStyle: 'none' }} className={"d-flex justify-content-between " + (item.done ? 'text-muted linethrought' : 'font-weight-bold')} key={item.id}> <span>{i + 1 + ')'}</span>

            {item.text} <i onClick={() => { this.removeItem(item.id) }} style={{ cursor: 'pointer' }} className="fas fa-trash-alt"></i>

            <input type="checkbox" checked={item.done ? 'checked' : ''} onChange={() => { this.handleCheck(item.id) }} className="form-check-input" /></li>
        })}
      </ul>
    )
  }
}