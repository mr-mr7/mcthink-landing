import Link from "next/link";
import ImageLazy from "../partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";
import { SlugGenerator } from "@/utility/Functions";
import TextOverflow from "@/utility/TextOverFlow";

const BlockCard = (props) => {
  const {
    src = "",
    link = "#",
    category,
    title = "",
    date,
    description = "",
    sub_title,
    user,
  } = props;
  return (
    <div class="post-block-style post-float-half clearfix">
      <div class="post-thumb">
        <Link href={link}>
          <ImageLazy src={src} alt={title} />
        </Link>
      </div>
      {category && (
        <Link
          class="post-cat"
          href={`/category/${category.id}/${SlugGenerator(category.title)}`}
        >
          {category?.title}
        </Link>
      )}
      <div class="post-content">
        <span class="post-date">
          <TextOverflow>{sub_title}</TextOverflow>
        </span>
        <h2 class="post-title">
          <Link href={link}>
            <TextOverflow number={150}>{title}</TextOverflow>
          </Link>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a href="#">{user?.name}</a>
          </span>
          <span class="post-date">{convertDateToPersian(date)}</span>
        </div>
      </div>
    </div>
  );
};
export default BlockCard;
