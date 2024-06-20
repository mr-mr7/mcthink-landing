"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedPostArea = () => {
  const swiperRef = useRef();

  return (
    <div class="col-md-7 col-xs-12 pad-r" style={{ position: "relative" }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        id="featured-slider"
        className="swipper-featured-slider"
      >
        <SwiperSlide class="item">
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="images/news/lifestyle/health5.jpg" alt="" />
          </div>
          <div class="featured-post">
            <div class="post-content">
              <a class="post-cat" href="#">
                سلامتی
              </a>
              <h2 class="post-title title-extra-large">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از
                </a>
              </h2>
              <span class="post-date">16 دی 1396</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide class="item">
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="images/news/tech/gadget2.jpg" alt="" />
          </div>
          <div class="featured-post">
            <div class="post-content">
              <a class="post-cat" href="#">
                ابزار
              </a>
              <h2 class="post-title title-extra-large">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </a>
              </h2>
              <span class="post-date">16 دی 1396</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide class="item">
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="images/news/lifestyle/travel5.jpg" alt="" />
          </div>
          <div class="featured-post">
            <div class="post-content">
              <a class="post-cat" href="#">
                مسافرت
              </a>
              <h2 class="post-title title-extra-large">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                </a>
              </h2>
              <span class="post-date">16 دی 1396</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-header">
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
export default FeaturedPostArea;
