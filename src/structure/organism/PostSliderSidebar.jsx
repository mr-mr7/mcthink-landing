"use client";
import { useRef } from "react";
import { Swiper , SwiperSlide } from "swiper/react";

const PostSliderSidebar = () => {
  const swiperRef = useRef();

  return (
    <div class="post-sidebar-slider widget color-default m-bottom-0">
      <h3 class="block-title">
        <span>لورم ایپسوم </span>
      </h3>

      <Swiper
        id="post-slide"
        class="owl-carousel owl-theme post-slide"
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide class="item">
          <div class="post-overaly-style text-center clearfix">
            <div class="post-thumb">
              <a href="single-post1.html">
                <img
                  class="img-responsive"
                  src="images/news/tech/gadget1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="post-content">
              <a class="post-cat" href="#">
                گجت ها
              </a>
              <h2 class="post-title">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </a>
              </h2>
              <div class="post-meta">
                <span class="post-date">2 شهریور 1396</span>
              </div>
            </div>
          </div>

          <div class="post-overaly-style text-center clearfix">
            <div class="post-thumb">
              <a href="single-post1.html">
                <img
                  class="img-responsive"
                  src="images/news/video/video1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="post-content">
              <a class="post-cat" href="#">
                ویدئو
              </a>
              <h2 class="post-title">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </a>
              </h2>
              <div class="post-meta">
                <span class="post-date">12 مرداد 1396</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide class="item">
          <div class="post-overaly-style text-center clearfix">
            <div class="post-thumb">
              <a href="single-post1.html">
                <img
                  class="img-responsive"
                  src="images/news/lifestyle/health5.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="post-content">
              <a class="post-cat" href="#">
                سلامتی
              </a>
              <h2 class="post-title">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </a>
              </h2>
              <div class="post-meta">
                <span class="post-date">2 شهریور 1396</span>
              </div>
            </div>
          </div>

          <div class="post-overaly-style text-center clearfix">
            <div class="post-thumb">
              <a href="single-post1.html">
                <img
                  class="img-responsive"
                  src="images/news/tech/robot1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div class="post-content">
              <a class="post-cat" href="#">
                رباتیک
              </a>
              <h2 class="post-title">
                <a href="single-post1.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                </a>
              </h2>
              <div class="post-meta">
                <span class="post-date">لورم ایپسوم متن</span>
              </div>
            </div>
          </div>
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
export default PostSliderSidebar;
