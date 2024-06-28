"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import BlockTitle from "@/components/ui/BlockTitle";
import BlockCard from "@/components/ui/BlockCard";
import Gapper from "@/components/ui/Gapper";
import { ListToMatrix, SlugGenerator } from "@/utility/Functions";

const MostDiscussedPosts = ({ posts }) => {
  const swiperRef = useRef();
  return (
    <div class="more-news block color-default">
      <BlockTitle title={"پر بحث ترین خبر ها"} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        id="more-news-slide"
        className="more-news-slide"
      >
        {ListToMatrix(posts, 3).map((triplePosts) => (
          <SwiperSlide class="item">
            {triplePosts.map((post, i) => (
              <>
                <BlockCard
                  src={
                    post?.media?.find((item) => item.title == "main_image")?.[
                      "original_url"
                    ]
                  }
                  sub_title={post?.sub_title}
                  user={post?.user}
                  title={post?.title}
                  date={post?.created_at}
                  category={post?.categories[0]}
                  link={`/posts/${post?.id}/${SlugGenerator(post?.title ?? "")}`}
                />
                {post.length - 1 != i ? <Gapper className="gap-30" /> : <></>}
              </>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button">
        <span onClick={() => swiperRef.current.slidePrev()}>
          <i class="fa fa-angle-right"></i>
        </span>
        <span onClick={() => swiperRef.current.slideNext()}>
          <i class="fa fa-angle-left"></i>
        </span>
      </div>
    </div>
  );
};
export default MostDiscussedPosts;
