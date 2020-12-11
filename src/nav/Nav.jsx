import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  const style = {
    textDecoration: "none",
    color: "black",
  };
  const onHover = (e) => {
    e.target.style.color = "white";
    console.log("hovered");
  };
  const offHover = (e) => {
    e.target.style.color = "black";
  };
  return (
    <div className="menu">
      <div className="options">
        <Link
          to="/photos"
          style={style}
          onMouseOver={onHover}
          onMouseOut={offHover}
        >
          Photos
        </Link>
        <Link
          to="/videos"
          // href="https://www.youtube.com/channel/UCUBDo-qIacTrd6mgsyiddhw"
          style={style}
          onMouseOver={onHover}
          onMouseOut={offHover}
        >
          Videos
        </Link>
        <a
          href="mailto:Donthecameraguy@gmail.com"
          style={style}
          onMouseEnter={onHover}
          onMouseOut={offHover}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
