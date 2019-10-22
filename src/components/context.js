import React, { Component } from 'react'
const MistoryContext = React.createContext();

export class MistoryProvider extends Component {
  state = {
    items: [
      {
        id: 1,
        text: 'Market alışverişi yapılacak.',
        done: false
      },
      {
        id: 2,
        text: 'İşten sonra sinemaya gidilecek.',
        done: false
      },
      {
        id: 3,
        text: 'Eczaneye uğra.',
        done: true
      }
    ]
  }
  render() {
    return (
      <MistoryContext.Provider value={this.state}>
        {this.props.children}
      </MistoryContext.Provider>
    )
  }
}
const MistoryConsumer = MistoryContext.Consumer;
export default MistoryConsumer;  
