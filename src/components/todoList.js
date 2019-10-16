import React, { Component } from 'react'


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(idx) {
    console.log(idx)
    this.props.removeItem(idx);
  }
  render() {
    return (
      <ul style={{ padding: '0' }}>
        {this.props.items.map((item) => {
          return <li style={{ listStyle: 'none' }} className="d-flex justify-content-between" > <span>{item.idx + 1 + ')'}</span> {item.text} <i onClick={() => { this.removeItem(item.idx) }} key={item.id} style={{ cursor: 'pointer' }} className="fas fa-trash-alt"></i></li>
        })}
      </ul>
    )
  }
}