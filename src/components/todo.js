import React from 'react'
import TodoList from './todoList';
import { Spinner, ToastHeader, Toast, ToastBody } from 'reactstrap';
import '../App.scss'
import update from 'immutability-helper';


class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      text: '',
      showToast: false,
      done: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  removeItem(id) {
    this.setState({
      items: this.state.items.filter(el => el.id !== id)
    })
  }

  handleCheck(id) {
    var data = this.state.items;
    var commentIndex = data.findIndex(function (c) {
      return c.id == id;
    });

    var updatedItem = update(data[commentIndex], { done: { $set: !data[commentIndex].done } });

    var newData = update(data, {
      $splice: [[commentIndex, 1, updatedItem]]
    });
    this.setState({ items: newData });
  }

  render() {
    return (
      <div className="container heighting mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="text-center ">
              <h3 className="mb-4">TODO LİST</h3>
              <TodoList className="mb-4" removeItem={this.removeItem} items={this.state.items} handleCheck={this.handleCheck} />
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <input className="form-control" id="new-todo" type="text" value={this.state.text} onChange={this.handleChange} />
                {
                  this.state.ok &&
                  <Spinner className="spin" type="grow d-block text-center" color="primary" />
                }
                <button className="btn btn-success mt-2">
                  Add
                </button>

              </form>
            </div >
          </div>
        </div>
        {
          this.state.showToast &&
          <Toast className="spin">
            <ToastHeader>
              Yapılacaklar
                    </ToastHeader>
            <ToastBody>
              Listeye yeni madde eklendi!
                    </ToastBody>
          </Toast>
        }
      </div>
    );
  }


  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      done: false
    }
    this.setState({
      items: this.state.items.concat(newItem),
      text: '',
      showToast: true
    })

    setTimeout(() => {
      this.setState({
        showToast: false
      })
    }, 3000);
  }

}

export default TodoApp;