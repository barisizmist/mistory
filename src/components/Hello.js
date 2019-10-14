import React, { Component } from 'react'

export default class hello extends Component {
  render() {
    return (
      <div>
        Hi {this.props.name}!
      </div>
    )
  }
}
