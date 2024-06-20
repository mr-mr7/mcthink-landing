import { SlugGenerator } from "@/utility/Functions";
import Link from "next/link";

const CategoryLabelV1 = (props) => {
  const { title, id } = props;
  return (
    <Link class="post-cat" href={`/category/${SlugGenerator(title, id)}`}>
      {title}
    </Link>
  );
};
export default CategoryLabelV1;
