import React from 'react'
import TodoList from './todoList';
import uniqid from 'uniqid';
import MistoryConsumer from '../components/context';
import '../App.scss'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  changeText(e) {
    this.setState({
      text: e.target.value
    })
  }

  submitTodoForm = (dispatch, e) => {
    e.preventDefault();
    var newTodo = {
      text: this.state.text,
      id: uniqid(),
      done: false
    }
    dispatch({ type: "Submit_Todo", payload: newTodo })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <MistoryConsumer>
        {
          value => {
            const { items, dispatch } = value;
            return (
              <div className="heighting">
                <div className="row d-flex justify-content-center mt-4">
                  <div className="col-md-4">
                    <h4 className="text-center mb-4">TODO LİST</h4>
                    <div className="items">
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
                    </div>
                    <form id="todo-form" onSubmit={this.submitTodoForm.bind(this, dispatch)} className="d-flex flex-column justify-content-center align-items-center mt-4">
                      <input className="form-control" type="text" name="text" onChange={this.changeText.bind(this)} value={this.state.text} />
                      <button type="submit" className="btn btn-success add-btn">Add</button>
                    </form>
                  </div>
                </div>
              </div>
            )
          }
        }
      </MistoryConsumer>
    )
  }
}

export default TodoApp;