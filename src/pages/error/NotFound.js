import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className="heighting d-flex justify-content-center align-items-center flex-column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Error - Mistory App</title>
        </Helmet>
        <h2 className="text-center d-flex justify-content-center">
          Oopps!! This page not found!!
        </h2>
        <Link
          className="nav-link btn-dark mt-5"
          style={{ color: "#fff", display: "block", fontSize: 18 }}
          to="/"
        >
          Go to Home
        </Link>
      </div>
    );
  }
}
