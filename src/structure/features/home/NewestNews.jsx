"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
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
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
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
