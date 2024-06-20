import ImageLazy from "@/components/partials/image-lazy";

const Content = ({ post }) => {
  return (
    <>
      <div class="post-media post-featured-image">
        <a href="images/news/lifestyle/health5.jpg" class="gallery-popup">
          <ImageLazy
            src={
              post?.media?.find((item) => item.title == "main_image")?.[
                "original_url"
              ]
            }
            alt={post?.title}
            style={{ margin: "0px auto" }}
            size="lg"
          />
        </a>
      </div>
      <div
        class="entry-content"
        dangerouslySetInnerHTML={{ __html: post?.description ?? "" }}
      ></div>
    </>
  );
};
export default Content;
