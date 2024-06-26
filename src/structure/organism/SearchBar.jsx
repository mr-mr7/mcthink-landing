"use client";

import ImageLazy from "@/components/partials/image-lazy";
import service from "@/service";
import { SlugGenerator } from "@/utility/Functions";
import { convertDateToPersian } from "@/utility/Moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BeatLoader } from "react-spinners";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [showResultBox, setShowResultBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setIsLoading(true);
      service
        .getPostsData({
          "f[title]": searchText,
        })
        .then((res) => setPosts(res.data))
        .finally(() => {
          firstRender.current = false;
          setShowResultBox(true);
          setIsLoading(false);
        });
    }
  }, [searchText]);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowResultBox(false);
      }}
    >
      <div class="search-block ">
        <input
          type="text"
          class="form-control"
          placeholder="عبارت را وارد نموده و اینتر بزنید"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span
          class="search-icon"
          onClick={() =>
            searchText && router.push(`/search/${SlugGenerator(searchText)}`)
          }
        >
          <i class="fa fa-search"></i>
        </span>

        {showResultBox && (
          <div class="list-post-block search-box-result">
            <ul class="list-post">
              {isLoading ? (
                <li class="clearfix text-center">
                  {<BeatLoader color="#ec0000" size={12} />}
                </li>
              ) : (
                <>
                  {posts.length > 0 ? (
                    <>
                      {posts?.slice(0, 3)?.map((p, i) => (
                        <li class="clearfix" key={i}>
                          <div class="post-block-style post-float clearfix">
                            <div class="post-thumb">
                              <Link
                                href={`/posts/${p.id}/${SlugGenerator(
                                  p.title
                                )}`}
                              >
                                <ImageLazy
                                  src={
                                    p?.media?.find(
                                      (item) => item.title == "main_image"
                                    )?.["original_url"] ?? ""
                                  }
                                  alt={p.title}
                                  size="sm"
                                />
                              </Link>
                            </div>
                            <div class="post-content">
                              <h2 class="post-title title-small">
                                <Link
                                  href={`/posts/${p.id}/${SlugGenerator(
                                    p.title
                                  )}`}
                                >
                                  {p.title}
                                </Link>
                              </h2>
                              <div class="post-meta">
                                <span class="post-date">
                                  {convertDateToPersian(p.created_at)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li class="clearfix">
                      <div class="post-block-style post-float clearfix">
                        موردی یافت نشد
                      </div>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};
export default SearchBar;
