import ImageLazy from "@/components/partials/image-lazy";
import BlockTitle from "@/components/ui/BlockTitle";
import Card from "@/components/ui/Card";
import Pagination from "@/structure/organism/Pagination";
import { SlugGenerator } from "@/utility/Functions";

const CategoryPosts = (props) => {
  const { posts, title } = props;
  return (
    <>
      <div class="block category-listing">
        <BlockTitle title={title} />
        <div class="row">
          {posts.length > 0 ? (
            <>
              {posts.map((p, i) => (
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
                    link={`/post/${SlugGenerator(p?.title ?? "", p?.id)}`}
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
      {posts.length > 0 ? <Pagination /> : null}
    </>
  );
};
export default CategoryPosts;
