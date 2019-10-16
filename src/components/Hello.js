import React, { Component } from 'react'

export default class hello extends Component {
  render() {
    return (
      <div className="container heighting">
        Hi {this.props.name}!
      </div>
    )
  }
}
