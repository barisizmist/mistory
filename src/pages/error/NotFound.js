import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Helmet } from 'react-helmet'

export default class NotFound extends Component {
  render() {
    return (
      <div className="heighting d-flex justify-content-center align-items-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Error - Mistory App</title>
        </Helmet>
        <h2 className="text-center d-flex justify-content-center">Oopps!! This page not found!!</h2>
      </div>
    )
  }
}
