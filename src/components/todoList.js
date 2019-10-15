import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(e) {
    e.preventDefault();
    this.setState({
    })
  }
  render() {
    return (

      <Table bordered>
        <tbody>
          {
            this.props.items.map(item => (
              <tr>
                <th >{item.idx}</th>
                <td key={item.id}>{item.text}</td>
                <td onClick={this.deleteItem}>X</td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    )
  }
}