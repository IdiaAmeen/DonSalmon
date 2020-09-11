import React, { Component } from "react";
import Pics from "../data/pics.json";
import "./Main.css";
export default class Main extends Component {
  render() {
    return (
      <div className="photo-log">
        {Pics.map((pic) => (
          <div key={pic.imgURL} className="photo-slide">
            <img src={pic.imgURL} className="photos" />
          </div>
        ))}
      </div>
    );
  }
}
