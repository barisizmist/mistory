import React from 'react'
import TodoList from './todoList';
import MistoryConsumer from '../components/context';
// import { Spinner, ToastHeader, Toast, ToastBody } from 'reactstrap';
import '../App.scss'
// import update from 'immutability-helper';


class TodoApp extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: '',
  //     showToast: false,
  //     done: false
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.removeItem = this.removeItem.bind(this);
  //   this.handleCheck = this.handleCheck.bind(this);
  // }
  // removeItem(id) {
  //   this.setState({
  //     items: this.state.items.filter(el => el.id !== id)
  //   })
  // }

  // handleCheck(id) {
  //   var data = this.state.items;
  //   var commentIndex = data.findIndex(function (c) {
  //     return c.id === id;
  //   });

  //   var updatedItem = update(data[commentIndex], { done: { $set: !data[commentIndex].done } });

  //   var newData = update(data, {
  //     $splice: [[commentIndex, 1, updatedItem]]
  //   });
  //   this.setState({ items: newData });
  // }

  render() {
    return (
      <MistoryConsumer>
        {
          value => {
            const { items } = value;
            return (
              <ul className="heighting">
                {
                  items.map(item => {
                    return (
                      <TodoList className="mb-4"
                        id={item.id}
                        key={item.id}
                        text={item.text}
                        done={item.done}
                      />
                    )
                  })
                }
              </ul>
            )
          }
        }
      </MistoryConsumer>
    )

  }
}

export default TodoApp;