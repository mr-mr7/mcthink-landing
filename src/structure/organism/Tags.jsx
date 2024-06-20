import BlockTitle from "@/components/ui/BlockTitle";
import { SlugGenerator } from "@/utility/Functions";
import Link from "next/link";

const Tags = ({ tags }) => {
  return (
    <div className="widget widget-tags">
      <BlockTitle title={"برچسب ها"} />
      <ul className="unstyled clearfix">
        {tags.map((t, i) => (
          <li key={i}>
            <Link href={`/tags/${t.id}/${SlugGenerator(t.name)}`}>
              {t.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tags;
