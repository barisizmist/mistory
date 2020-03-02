import React from "react";
import TodoList from "./todoList";
import uniqid from "uniqid";
import MistoryConsumer from "../components/context";
import "../App.scss";
import { Helmet } from "react-helmet";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  changeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  submitTodoForm = (dispatch, e) => {
    e.preventDefault();
    if (this.state.text === "") {
      var err = document.querySelector(".error-message");
      err.innerHTML = "Please type a to do!";
      err.style.color = "red";
      err.style.marginTop = "10px";
      err.style.marginBottom = "0";
      return;
    }
    var newTodo = {
      text: this.state.text,
      id: uniqid(),
      done: false
    };
    dispatch({ type: "Submit_Todo", payload: newTodo });
    this.setState({
      text: ""
    });
    e.target.blur();
  };

  render() {
    return (
      <MistoryConsumer>
        {value => {
          const { items, dispatch } = value;
          return (
            <div className="heighting">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Todo - Mistory App</title>
              </Helmet>
              <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-4">
                  <h4 className="text-center mb-4">TODO LİST</h4>
                  <div className="items">
                    {items.map(item => {
                      return (
                        <TodoList
                          className="mb-4"
                          id={item.id}
                          key={item.id}
                          text={item.text}
                          done={item.done}
                        />
                      );
                    })}
                  </div>
                  <form
                    id="todo-form"
                    onSubmit={this.submitTodoForm.bind(this, dispatch)}
                    className="d-flex flex-column justify-content-center align-items-center mt-4"
                  >
                    <input
                      id="input"
                      className="form-control"
                      type="text"
                      name="text"
                      onChange={this.changeText.bind(this)}
                      value={this.state.text}
                    />
                    <p className="error-message"></p>
                    <button type="submit" className="btn btn-success add-btn">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </MistoryConsumer>
    );
  }
}

export default TodoApp;
