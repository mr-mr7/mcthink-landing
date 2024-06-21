import { SlugGenerator } from "@/utility/Functions";
import Link from "next/link";

const CategoryLabelV1 = (props) => {
  const { title, id } = props;
  return (
    <Link class="post-cat" href={`/category/${id}/${SlugGenerator(title)}`}>
      {title}
    </Link>
  );
};
export default CategoryLabelV1;
