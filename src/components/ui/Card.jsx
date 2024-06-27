import Link from "next/link";
import ImageLazy from "../partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";
import TextOverflow from "@/utility/TextOverFlow";

const Card = (props) => {
  const {
    src = "",
    title,
    date,
    description = "",
    link = "#",
    commentsCount,
    sub_title,
    user,
  } = props; 

  return (
    <div class="post-block-style post-grid clearfix">
      <div class="post-thumb">
        <Link href={link}>
          <ImageLazy src={src} alt={title} size="lg" />
        </Link>
      </div>
      <div class="post-content">
        <span className="post-date">
          <TextOverflow number={30}>{sub_title}</TextOverflow>
        </span>
        <h2 class="post-title title-large"> 
          <Link href={link}>
            <TextOverflow number={70}>{title}</TextOverflow>
          </Link>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a href="#">{user?.name}</a>
          </span>
          <span className="post-date"> {convertDateToPersian(date)} </span>
          <span class="post-comment pull-right">
            <i class="fa fa-comments-o"></i>
            <a href="#" class="comments-link">
              <span>{commentsCount}</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
