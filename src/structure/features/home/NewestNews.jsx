"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import ColCard from "@/components/ui/ColCard";
import Gapper from "@/components/ui/Gapper";
import BlockTitle from "@/components/ui/BlockTitle";
import { ListToMatrix, SlugGenerator } from "@/utility/Functions";

const NewestNews = (props) => {
  const { newestPosts: posts } = props;
  const swiperRef = useRef();
  return (
    <>
      <div class="latest-news block color-red">
        <BlockTitle title={"جدید ترین خبر ها"} />
        {posts?.length > 0 ? (
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              // when window width is >= 768px
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
            id="latest-news-slide"
          >
            {ListToMatrix(posts, 2).map((post) => (
              <SwiperSlide class="item">
                <ul class="list-post">
                  {post.map((p, index) => (
                    <>
                      <li class="clearfix" key={index}>
                        <ColCard
                          src={
                            p?.media?.find(
                              (item) => item.title == "main_image"
                            )?.["original_url"]
                          }
                          sub_title={p?.sub_title}
                          user={p?.user}
                          title={p?.title}
                          date={p?.created_at}
                          category={p?.categories[0]}
                          link={`/posts/${p?.id}/${SlugGenerator(
                            p?.title ?? ""
                          )}`}
                        />
                      </li>
                      {index != 1 ? <Gapper gap="gap-30" /> : <></>}
                    </>
                  ))}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <div className="swiper-button">
          <span onClick={() => swiperRef.current.slidePrev()}>
            <i class="fa fa-angle-right"></i>
          </span>
          <span onClick={() => swiperRef.current.slideNext()}>
            <i class="fa fa-angle-left"></i>
          </span>
        </div>
      </div>
    </>
  );
};
export default NewestNews;
