import ImageLazy from "@/components/partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";
import Link from "next/link";

const RowCard = (props) => {
  const { src = '', title, date, link = "#" } = props;
  return (
    <div className="post-block-style post-float clearfix">
      <div className="post-thumb">
        <Link href={link}>
          <ImageLazy src={src} alt={title} size={"sm"} />
        </Link>
      </div>
      <div className="post-content">
        <h2 className="post-title title-small">
          <Link href={link}>{title}</Link>
        </h2>
        <div className="post-meta">
          <span className="post-date">{convertDateToPersian(date)}</span>
        </div>
      </div>
    </div>
  );
};
export default RowCard;
