import React from 'react'
import TodoList from './todoList';
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner, ToastHeader, Toast, ToastBody } from 'reactstrap';
import '../App.css'

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      ok: false,
      xarosho: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="text-center ">
              <h3>YAPILACAKLAR</h3>
              <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">Ne yapılması gerekiyor?</label>
                <input className="form-control" id="new-todo" type="text" value={this.state.text} onChange={this.handleChange} />
                {
                  this.state.ok &&
                  <Spinner className="spin" type="grow d-block text-center" color="primary" />
                }
                <button className="btn btn-success mt-2">
                  Ekle {this.state.items.length + 1}
                </button>

              </form>
            </div >
          </div>
        </div>
        {
          this.state.xarosho &&
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

    setTimeout(() => {
      this.setState(state => ({
        ok: false
      }))
    }, 1000);
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      idx: this.state.items.length + 1

    }
    setTimeout(() => {
      this.setState(state => ({
        items: this.state.items.concat(newItem),
        text: '',
        xarosho: true
      }))
    }, 1000)

    setTimeout(() => {
      this.setState(state => ({
        xarosho: false
      }))
    }, 3000);
  }

}


export default TodoApp;