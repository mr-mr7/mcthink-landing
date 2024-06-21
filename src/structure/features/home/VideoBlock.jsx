"use client";

import ImageLazy from "@/components/partials/image-lazy";
import service from "@/service";
import { useEffect, useState } from "react";

const getData = async (sections) => {
  const [section4Posts] = await Promise.all([
    service
      .getPostsData({
        include: "categories",
        "f[categories.id]": sections?.section4?.category_id ?? null,
      })
      .then((v) => v),
  ]);

  return {
    section4Posts: section4Posts?.data,
  };
};
const VideoBlock = ({ sections }) => {
  const [section4Posts, setSection4Posts] = useState([]);
  const [activeTab, setActiveTab] = useState({});
  useEffect(() => {
    getData(sections).then((res) => {
      setSection4Posts(res?.section4Posts);
      setActiveTab(res?.section4Posts[0]);
    });
  }, []);
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
                      <a href="single-post1.html">{activeTab.title}</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 pad-l-0">
            <ul class="nav nav-tabs">
              {section4Posts?.slice(0, 3)?.map((post) => (
                <li class="cursor-pointer">
                  <a
                    class="animated fadeIn"
                    href="#video1"
                    data-toggle="tab"
                    onClick={() => setActiveTab(post)}
                  >
                    <div class="post-thumb">
                      <ImageLazy
                        src={
                          post?.media?.find(
                            (item) => item.title == "main_image"
                          )?.["original_url"]
                        }
                        alt={post.title}
                      />
                    </div>
                    <h3>{post.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoBlock;
