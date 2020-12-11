import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Nav from "./nav/Nav";
import Photos from "./photos/Photos";
import VideosJS from "./videos/VideoJS";
import Gallery from "./gallery/Gallery";

import { Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Main />
        <Nav />
      </Route>
      <Route exact path="/photos">
        <Gallery />
      </Route>
      <Route exact path="/videos">
        <VideosJS />
      </Route>
    </div>
  );
}

export default App;
