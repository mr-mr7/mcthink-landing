"use client";
import { convertDateToPersian } from "@/utility/Moment";
import ImageLazy from "../partials/image-lazy";
import Link from "next/link";
import { SlugGenerator } from "@/utility/Functions";
import TextOverflow from "@/utility/TextOverFlow";

const OverlayCard = ({ indexPost }) => {
  return (
    <div className="post-overaly-style clearfix">
      <div className="post-thumb">
        <Link
          href={`/posts/${indexPost?.id}/${SlugGenerator(
            indexPost?.title ?? ""
          )}`}
        >
          <ImageLazy
            alt={indexPost?.title}
            src={
              indexPost?.media?.find((item) => item.title == "main_image")?.[
                "original_url"
              ]
            }
            size={"lg"}
          />
        </Link> 
      </div>
      <div className="post-content">
        <span className="post-date">
          <TextOverflow number={30}> {indexPost?.sub_title}</TextOverflow>
        </span>
        <h2 className="post-title">
          <Link
            href={`/posts/${indexPost?.id}/${SlugGenerator(
              indexPost?.title ?? ""
            )}`}
          >
            <TextOverflow number={70}>{indexPost?.title}</TextOverflow>
          </Link>
        </h2>
        <div className="post-meta">
          <span className="post-date">
            {convertDateToPersian(indexPost?.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default OverlayCard;
