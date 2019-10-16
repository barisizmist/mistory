import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App'

class api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let qty = randomIntFromInterval(135, 500);
    let url = `https://api.github.com/users?since=${qty}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }, console.log(data), console.log(url)));
  }

  render() {
    return (
      <div className="container heighting">
        {
          this.state.data.map(user => (
            <div className="image-wrapper" key={user.id} >
              <img className="responsive-image" src={user.avatar_url} alt={user.login}>
              </img>
              <div className="name"> <span> {user.login}</span></div>
            </div>
          )
          )
        }
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default api;