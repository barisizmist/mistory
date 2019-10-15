import React, { Component } from 'react'

class api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users?since=135')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    // const { hits } = this.data;
    return (

      <ul>
        {
          this.state.data.map(user => {
            return (
              <li key={user.id}>{user.login}</li>
            )
          })

        }
      </ul>
    );
  }
}

export default api;