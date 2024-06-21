import { SlugGenerator } from "@/utility/Functions";
import Link from "next/link";

const RelatedTags = ({ tags }) => {
  return (
    <div class="tags-area clearfix">
      <div class="post-tags">
        <span>برچسب ها:</span>
        {tags?.map((t) => (
          <Link href={`/tags/${t.id}/${SlugGenerator(t.name)}`}>
            # {t.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RelatedTags;
