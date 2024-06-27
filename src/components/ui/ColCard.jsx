import ImageLazy from "@/components/partials/image-lazy";
import { SlugGenerator } from "@/utility/Functions";
import { convertDateToPersian } from "@/utility/Moment";
import TextOverflow from "@/utility/TextOverFlow";
import Link from "next/link";

const ColCard = (props) => {
  const { src = "", title, date, category, link, sub_title = "", user } = props;
  return (
    <div class="post-block-style clearfix">
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
          <TextOverflow number={30}>{sub_title}</TextOverflow>
        </span>
        <h2 class="post-title title-small">
          <Link href={link}>
            <TextOverflow number={70}>{title}</TextOverflow>{" "}
          </Link>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a href="#">{user?.name}</a>
          </span>
          <span className="post-date"> {convertDateToPersian(date)} </span>
        </div>
      </div>
    </div>
  );
};
export default ColCard;
