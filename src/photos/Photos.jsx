import React from "react";
import Pics from "./pics.json";
import "./Photos.css";
export default function Photos() {
  return (
    <div>
      <div className="photo-log">
        {Pics.map((pic) => (
          <div key={pic.imgURL} className="photo-slide">
            <img src={pic.imgURL} className="photos" />
          </div>
        ))}
      </div>
    </div>
  );
}
