"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "@/components/ui/BlockTitle";
import { SlugGenerator } from "@/utility/Functions";
import ColCard from "@/components/ui/ColCard";

const RelatedPosts = ({ relatedPosts }) => {
  console.log(relatedPosts, "relatedPosts");
  const swiperRef = useRef();
  return (
    <div class="related-posts block">
      <BlockTitle title={"مطالب مرتبط "} />
      <Swiper
        id="latest-news-slide"
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {relatedPosts?.map((p, i) => (
          <SwiperSlide class="item" key={i}>
            <ColCard
              src={
                p?.media?.find((item) => item.title == "main_image")?.[
                  "original_url"
                ]
              }
              title={p?.title}
              date={p?.created_at}
              link={`/posts/${p?.id}/${SlugGenerator(p?.title ?? "")}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button">
        <span onClick={() => swiperRef.current.slidePrev()}>
          <i className="fa fa-angle-right"></i>
        </span>
        <span onClick={() => swiperRef.current.slideNext()}>
          <i className="fa fa-angle-left"></i>
        </span>
      </div>
    </div>
  );
};
export default RelatedPosts;
