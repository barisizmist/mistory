import React, { Component } from 'react'

const MistoryContext = React.createContext();

export default class MistoryProvider extends Component {
  render() {
    return (
      <MistoryContext.Provider>
        {this.props.children}
      </MistoryContext.Provider>
    )
  }
}
