"use client";
import ImageLazy from "@/components/partials/image-lazy";
import { SlugGenerator } from "@/utility/Functions";
import { convertDateToPersian } from "@/utility/Moment";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedPostArea = ({ sliders, posts }) => {
  const swiperRef = useRef();
  let _sliders = posts.filter((p) => {
    for (let i = 0; i < sliders.length; i++) {
      if (p.id == sliders[i]) return p;
    }
  });
  return (
    <div class="col-md-7 col-xs-12 pad-r" style={{ position: "relative" }}>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        id="featured-slider"
        className="swipper-featured-slider"
      >
        {_sliders?.map((s, i) => (
          <SwiperSlide class="item">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href={`/posts/${s?.id}/${SlugGenerator(s?.title ?? "")}`}>
                <ImageLazy
                  src={
                    s.media?.find((item) => item.title == "main_image")?.[
                      "original_url"
                    ]
                  }
                  alt={s.title}
                  size={"sm"}
                />
              </Link>
            </div>
            <div class="featured-post">
              <div class="post-content">
                <h2 class="post-title title-extra-large">
                  <Link
                    href={`/posts/${s?.id}/${SlugGenerator(s?.title ?? "")}`}
                  >
                    {s.title}
                  </Link>
                </h2>
                <span class="post-date">
                  {convertDateToPersian(s.created_at)}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <span className="swiper-button-header-r" onClick={() => swiperRef.current.slidePrev()}>
          <i class="fa fa-angle-right"></i>
        </span>
        <span className="swiper-button-header-l"  onClick={() => swiperRef.current.slideNext()}>
          <i class="fa fa-angle-left"></i>
        </span>
    </div>
  );
};
export default FeaturedPostArea;
