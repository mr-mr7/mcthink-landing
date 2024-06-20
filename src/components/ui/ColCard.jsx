import ImageLazy from "@/components/partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";
import Link from "next/link";

const ColCard = (props) => {
  const { src = "", title, date, category, link } = props;
  return (
    <div class="post-block-style clearfix">
      <div class="post-thumb">
        <Link href={link}>
          <ImageLazy src={src} alt={title} />
        </Link>
      </div>
      {category && (
        <a class="post-cat" href="#">
          {category?.title}
        </a>
      )}
      <div class="post-content">
        <h2 class="post-title title-medium">
          <Link href={link}>{title} </Link>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a href="#">جان اسنو</a>
          </span>
          <span className="post-date"> {convertDateToPersian(date)} </span>
        </div>
      </div>
    </div>
  );
};
export default ColCard;
