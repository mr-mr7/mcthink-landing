"use client";
import BlockTitle from "@/components/ui/BlockTitle";
import Card from "@/components/ui/Card";
import RowCard from "@/components/ui/RowCard";
import { SlugGenerator } from "@/utility/Functions";

const MostVisited = (props) => {
  const { indexPost, mostVisitedPosts } = props;
  console.log(indexPost, "indexPost");
  return (
    <div className="featured-tab color-blue">
      <BlockTitle title={"پر بازدید ترین خبر ها"} />
      <div className="row">
        <div className="col-md-6 col-sm-6">
          {indexPost && (
            <Card
              src={
                indexPost?.media?.find((item) => item.title == "main_image")?.[
                  "original_url"
                ]
              }
              title={indexPost?.title}
              date={indexPost?.created_at}
              category={indexPost?.categories[0]}
              description={indexPost?.description}
              link={`/posts/${indexPost?.id}/${SlugGenerator(
                indexPost?.title ?? ""
              )}`}
              commentsCount={indexPost?.comments_count}
            />
          )}
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="list-post-block">
            <ul className="list-post">
              {mostVisitedPosts?.map((p, i) => (
                <li className="clearfix" key={i}>
                  <RowCard
                    src={
                      p?.media?.find((item) => item.title == "main_image")?.[
                        "original_url"
                      ]
                    }
                    title={p?.title}
                    date={p?.created_at}
                    link={`/posts/${p?.id}/${SlugGenerator(p?.title ?? "")}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MostVisited;
