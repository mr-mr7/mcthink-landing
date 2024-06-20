"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import BlockTitle from "@/components/ui/BlockTitle";
import BlockCard from "@/components/ui/BlockCard";
import Gapper from "@/components/ui/Gapper";

const MoreNews = () => {
  const swiperRef = useRef();

  return (
    <div class="more-news block color-default">
      <BlockTitle title={"خبرهای بیشتر"} />

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        id="more-news-slide"
        className="more-news-slide"
      >
        <SwiperSlide class="item">
          <BlockCard />
          <Gapper className="gap-30" />
          <BlockCard />
          <Gapper className="gap-30" />
          <BlockCard />
          <Gapper className="gap-30" />
          <BlockCard />
        </SwiperSlide>
        
        <SwiperSlide class="item">
          <BlockCard />
          <Gapper className="gap-30" />
          <BlockCard />
          <Gapper className="gap-30" />
          <BlockCard />
          <Gapper className="gap-30" />
          <BlockCard />
        </SwiperSlide>
      
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
export default MoreNews;
