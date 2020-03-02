import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container heighting">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Timer - Mistory App</title>
        </Helmet>
        Saniye : {this.state.seconds}
      </div>
    );
  }
}
