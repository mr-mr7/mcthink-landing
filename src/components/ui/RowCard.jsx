import ImageLazy from "@/components/partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";
import TextOverflow from "@/utility/TextOverFlow";
import Link from "next/link";

const RowCard = (props) => {
  const { src = "", title, date, link = "#", sub_title = "" } = props;
  return (
    <div className="post-block-style post-float clearfix">
      <div className="post-thumb">
        <Link href={link}>
          <ImageLazy src={src} alt={title} size={"sm"} />
        </Link>
      </div>
      <div className="post-content">
        <span className="post-date">
          <TextOverflow number={30}>{sub_title}</TextOverflow>
        </span>
        <h2 className="post-title title-small">
          <Link href={link}>
            <TextOverflow number={35}>{title}</TextOverflow>
          </Link>
        </h2>
        <div className="post-meta">
          <span className="post-date">{convertDateToPersian(date)}</span>
        </div>
      </div>
    </div>
  );
};
export default RowCard;
