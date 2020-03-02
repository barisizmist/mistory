import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class hello extends Component {
  render() {
    return (
      <div className="container heighting d-flex justify-content-center align-items-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Hello React - Mistory App</title>
        </Helmet>
        Hi {this.props.name}!
      </div>
    );
  }
}
