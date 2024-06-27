"use client";
import ImageLazy from "@/components/partials/image-lazy";
import BlockTitle from "@/components/ui/BlockTitle";
import CategoryLabelV1 from "@/components/ui/CategoryLabelV1";
import { SlugGenerator } from "@/utility/Functions";
import { convertDateToPersian } from "@/utility/Moment";
import TextOverflow from "@/utility/TextOverFlow";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <div class="widget color-default">
      <BlockTitle title={"دسته بندی ها"} />
      <div class="list-post-block">
        <ul class="list-post">
          {categories?.map((c, i) => (
            <li class="clearfix" key={i}>
              <div class="post-block-style post-float clearfix">
                <div class="post-thumb">
                  <Link href={`/category/${c.id}/${SlugGenerator(c.title)}`}>
                    <ImageLazy
                      src={
                        c?.media?.find((item) => item.title == "main_image")?.[
                          "original_url"
                        ] ?? ""
                      } 
                      alt={c.title}
                      size="sm"
                    />
                  </Link>
                  <CategoryLabelV1 title={c.title} id={c.id} />
                </div>
                <div class="post-content">
                  <h2 class="post-title title-small">
                    <Link href={`/category/${c.id}/${SlugGenerator(c.title)}`}>
                      <TextOverflow number={50}>{c.meta}</TextOverflow>
                    </Link>
                  </h2>
                  <div class="post-meta">
                    <span class="post-date">
                      {convertDateToPersian(c.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Categories;
