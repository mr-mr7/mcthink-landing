"use client";

import { Api } from "@/api/config";

const Video = ({ videoSrc = "", showVideo, setShowVideo }) => {
  const closeVideo = () => {
    setShowVideo(false);
  };
  return (
    <>
      <div
        className={`${
          showVideo ? "video-background" : "video-background-none"
        }`}
        onClick={closeVideo}
      ></div>
      {showVideo && (
        <div className="close-video" onClick={closeVideo}>
          &#x2715;
        </div>
      )}
      <video controls>
        <source src={Api.baseUrl + videoSrc} type="video/mp4" />
      </video>
    </>
  );
};
export default Video;
