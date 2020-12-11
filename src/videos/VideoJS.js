import React from "react";
import VideoPlayer from "react-video-js-player";
import "./videos.css";
import MERCEE from "./MERCEE.mp4";
import asjahh from "./asjahh.mp4";
export default function VideoJS() {
  const videoSrc = MERCEE;
  const ajah = asjahh;

  return (
    <div className="videos">
      {/* {Videos.map((video) => (
        <div className="videos" key={video.src}>
          <VideoPlayer src={video.src} />{" "}
        </div>
      ))} */}
      <VideoPlayer
        src={videoSrc}
        width={300}
        height={350}
        poster="https://i.imgur.com/GXNnHmD.jpg"
      />
      <VideoPlayer
        src={ajah}
        width={300}
        height={350}
        poster="https://i.imgur.com/a3q8qmT.jpg"
      />
    </div>
  );
}
