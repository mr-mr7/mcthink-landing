"use client";
import BlockTitle from "@/components/ui/BlockTitle";
import Card from "@/components/ui/Card";
import service from "@/service";
import Pagination from "@/structure/organism/Pagination";
import { SlugGenerator } from "@/utility/Functions";
import { useEffect, useRef, useState } from "react";

const TwoColumnPosts = (props) => {
  const { posts, title, meta } = props;
  const [data, setData] = useState(posts);
  const firstRender = useRef(true);
  const [currentPage, setCurrentPage] = useState(meta?.current_page || 1);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      service
        .getPostsData({
          include: "categories",
          page: currentPage,
          per_page: 10,
        })
        .then((res) => {
          setData(res.data);
        });
    }
  }, [currentPage]);
  return (
    <>
      <div class="block category-listing">
        <BlockTitle title={title} />
        <div class="row">
          {posts.length > 0 ? (
            <>
              {data.map((p, i) => (
                <div class="col-md-6 col-sm-6" key={i}>
                  <Card
                    src={
                      p?.media?.find((item) => item.title == "main_image")?.[
                        "original_url"
                      ]
                    }
                    title={p?.title}
                    date={p?.created_at}
                    category={p?.categories[0]}
                    description={p?.description}
                    link={`/posts/${p?.id}/${SlugGenerator(p?.title)}`}
                    commentsCount={p?.comments_count}
                  />
                </div>
              ))}
            </>
          ) : (
            <div>
              <span> پستی وجود ندارد</span>
            </div>
          )}
        </div>
      </div>
      {posts.length > 0 ? (
        <Pagination
          totalPage={Math.ceil(meta?.total / meta?.per_page)}
          currentPage={currentPage}
          handleChangePage={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </>
  );
};
export default TwoColumnPosts;
