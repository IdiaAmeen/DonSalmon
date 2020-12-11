import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          {" "}
          <img
            src={require("../images/donlogo.PNG")}
            alt="Shot by Don"
            id="logo"
          />
        </Link>

        {/* <div className="nav">
          <a href="https://www.youtube.com/channel/UCUBDo-qIacTrd6mgsyiddhw/featured">
            <p>Videography</p>
          </a>
          <a href="mailto:Donthecameraguy@gmail.com">Contact</a>
          <Link to="/">Home</Link>
        </div> */}
      </div>
    );
  }
}
