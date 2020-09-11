import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src={require("../images/donlogo.PNG")}
          alt="Shot by Don"
          id="logo"
        />
        <div className="nav">
          <p>Place Holder</p>
          <p>Place Holder</p>
          <p>Place Holder</p>
        </div>
      </div>
    );
  }
}
