import ImageLazy from "@/components/partials/image-lazy";
import { SlugGenerator } from "@/utility/Functions";
import Link from "next/link";

const HeaderIndexPosts = ({ postSlider, posts }) => {
  let _post_slider = {
    sticky_slider1: posts?.find(
      (itme) => itme.id == JSON.parse(postSlider)?.sticky_slider1
    ),
    sticky_slider2: posts?.find(
      (itme) => itme.id == JSON.parse(postSlider)?.sticky_slider2
    ),
    sticky_slider3: posts?.find(
      (itme) => itme.id == JSON.parse(postSlider)?.sticky_slider3
    ),
  };
  return (
    <div class="col-md-5 col-xs-12 pad-l">
      <div class="row">
        <div class="col-sm-12">
          <div class="post-overaly-style contentTop hot-post-top clearfix">
            <div class="post-thumb">
              <Link
                href={`/posts/${
                  _post_slider?.sticky_slider1?.id
                }/${SlugGenerator(_post_slider?.sticky_slider1?.title ?? "")}`}
              >
                <ImageLazy
                  src={
                    _post_slider?.sticky_slider1?.media?.find(
                      (item) => item.title == "main_image"
                    )?.["original_url"]
                  }
                  alt={_post_slider?.sticky_slider1?.title}
                  size={"lg"}
                />
              </Link>
            </div>
            <div class="post-content">
              <h2 class="post-title title-large">
                <Link
                  href={`/posts/${
                    _post_slider?.sticky_slider1?.id
                  }/${SlugGenerator(
                    _post_slider?.sticky_slider1?.title ?? ""
                  )}`}
                >
                  {_post_slider?.sticky_slider1?.title}
                </Link>
              </h2>
              <span class="post-date">
                {_post_slider?.sticky_slider1?.sub_title}
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-6 pad-r-small">
          <div class="post-overaly-style contentTop hot-post-bottom clearfix">
            <div class="post-thumb">
              <Link
                href={`/posts/${
                  _post_slider?.sticky_slider2?.id
                }/${SlugGenerator(_post_slider?.sticky_slider2?.title ?? "")}`}
              >
                <ImageLazy
                  src={
                    _post_slider?.sticky_slider2?.media?.find(
                      (item) => item.title == "main_image"
                    )?.["original_url"]
                  }
                  alt={_post_slider?.sticky_slider2?.title}
                  size={"md"}
                />
              </Link>
            </div>
            <div class="post-content">
              <h2 class="post-title title-medium">
                <Link
                  href={`/posts/${
                    _post_slider?.sticky_slider2?.id
                  }/${SlugGenerator(
                    _post_slider?.sticky_slider2?.title ?? ""
                  )}`}
                >
                  {_post_slider?.sticky_slider2?.title}
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-sm-6 pad-l-small">
          <div class="post-overaly-style contentTop hot-post-bottom clearfix">
            <div class="post-thumb">
              <Link
                href={`/posts/${
                  _post_slider?.sticky_slider3?.id
                }/${SlugGenerator(_post_slider?.sticky_slider3?.title ?? "")}`}
              >
                <ImageLazy
                  src={
                    _post_slider?.sticky_slider3?.media?.find(
                      (item) => item.title == "main_image"
                    )?.["original_url"]
                  }
                  alt={_post_slider?.sticky_slider3?.title}
                  size={"md"}
                />
              </Link>
            </div>
            <div class="post-content">
              <h2 class="post-title title-medium">
                <Link
                  href={`/posts/${
                    _post_slider?.sticky_slider3?.id
                  }/${SlugGenerator(
                    _post_slider?.sticky_slider3?.title ?? ""
                  )}`}
                >
                  {_post_slider?.sticky_slider3?.title}{" "}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderIndexPosts;
