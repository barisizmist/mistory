import React, { Component } from 'react'


export default class TodoList extends Component {
  // removeItem(id) {
  //   this.props.removeItem(id);
  // }
  // handleCheck(id) {
  //   this.props.handleCheck(id);
  // }

  render() {
    const { done, id, text } = this.props;
    return (
      <li style={{ listStyle: 'none' }} className={"d-flex justify-content-between " + ({ done } ? 'text-muted linethrought' : 'font-weight-bold')} key={id}> <span></span>

        {text} <i style={{ cursor: 'pointer' }} className="fas fa-trash-alt"></i>

        <input type="checkbox" className="form-check-input" /></li>
    )
  }
}