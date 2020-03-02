import React, { Component } from "react";
import MistoryConsumer from "../components/context";

export default class TodoList extends Component {
  deleteItem = dispatch => {
    const { id } = this.props;
    dispatch({ type: "Delete_Item", payload: id });
  };
  complateItem = dispatch => {
    const { id } = this.props;
    dispatch({ type: "Complate_Item", payload: id });
  };
  render() {
    const { done, id, text } = this.props;
    return (
      <MistoryConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
              className={
                "text-center item d-flex justify-content-between " +
                (done ? "text-muted linethrought" : "font-weight-bold")
              }
              key={id}
            >
              <input
                type="checkbox"
                onChange={this.complateItem.bind(this, dispatch)}
                checked={done ? "checked" : ""}
                className="check"
              />

              {text}

              <i
                onClick={this.deleteItem.bind(this, dispatch)}
                className="deleteIcon fas fa-trash-alt"
              ></i>
            </div>
          );
        }}
      </MistoryConsumer>
    );
  }
}
