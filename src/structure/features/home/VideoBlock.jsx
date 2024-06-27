"use client";

import ImageLazy from "@/components/partials/image-lazy";
import service from "@/service";
import Video from "@/structure/organism/Video";
import TextOverflow from "@/utility/TextOverFlow";
import { useState } from "react";

const VideoBlock = ({ posts }) => {
  const [activeTab, setActiveTab] = useState({});
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div class="container">
      <div class="row">
        <div class="video-tab clearfix">
          <div class="col-md-7 pad-r-0">
            <div class="tab-content">
              <div class="tab-pane active animated fadeIn" id="video1">
                <div class="post-overaly-style clearfix">
                  <div class="post-thumb cursor-pointer">
                    <ImageLazy
                      src={
                        activeTab?.media?.find(
                          (item) => item.title == "main_image"
                        )?.["original_url"]
                      }
                      alt={activeTab.title}
                    />
                    <a class="popup">
                      <div class="video-icon">
                        <i class="fa fa-play"></i>
                      </div>
                    </a>
                  </div>
                  <div class="post-content">
                    <h2 class="post-title">
                      <a href="single-post1.html">
                        <TextOverflow number={70}>
                          {activeTab.title}
                        </TextOverflow>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 pad-l-0">
            <ul class="nav nav-tabs">
              {posts?.slice(0, 3)?.map((post) => (
                <li class="cursor-pointer">
                  <a
                    class="animated fadeIn"
                    href="#video1"
                    data-toggle="tab"
                    onClick={() => setActiveTab(post)}
                  >
                    <div class="post-thumb" onClick={() => setShowVideo(true)}>
                      <ImageLazy
                        src={
                          post?.media?.find(
                            (item) => item.title == "main_image"
                          )?.["original_url"]
                        }
                        alt={post.title}
                      />
                    </div>
                    <h3 className="post-title">
                      <TextOverflow number={70}>{post.title}</TextOverflow>
                    </h3>
                  </a>
                </li>
              ))}
              <Video showVideo={showVideo} setShowVideo={setShowVideo} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoBlock;
