import React, { Component } from 'react'
import update from 'immutability-helper';
const MistoryContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "Delete_Item":
      return {
        ...state,
        items: state.items.filter(item => action.payload !== item.id)
      }
    case "Complate_Item":
      var data = state.items;
      var commentIndex = data.findIndex(function (c) {
        return c.id === action.payload;
      });

      var updatedItem = update(data[commentIndex], { done: { $set: !data[commentIndex].done } });

      var newData = update(data, {
        $splice: [[commentIndex, 1, updatedItem]]
      });
      return {
        ...state,
        items: newData
      }
    case "Submit_Todo":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case "Login":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state
  }
}

export class MistoryProvider extends Component {
  state = {
    text: null,
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
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
