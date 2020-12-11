import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import soundfile from "./TheWoo.mp3";
export default class Music extends Component {
  // state = {
  //   autoplay: false,
  // };
  // componentDidMount() {
  //   this.setState({
  //     autoPlay: true,
  //   });
  // }
  render() {
    return (
      <ReactAudioPlayer
        src={soundfile}
        preload
        autoplay
        controls
        onPlay={(e) => console.log("onPlay")}
      />
    );
  }
}
