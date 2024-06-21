import Link from "next/link";
import ImageLazy from "../partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";
import { SlugGenerator } from "@/utility/Functions";

const BlockCard = (props) => {
  const {
    src = "",
    link = "#",
    category,
    title = "",
    date,
    description = "",
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
        <h2 class="post-title">
          <Link href={link}>{title}</Link>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a href="#">جان اسنو</a>
          </span>
          <span class="post-date">{convertDateToPersian(date)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
};
export default BlockCard;
