import ImageLazy from "@/components/partials/image-lazy";
import { convertDateToPersian } from "@/utility/Moment";

const CourseCard = (props) => {
  const { course } = props;
  return (
    <div class="post-block-style post-grid clearfix">
      <div class="post-thumb">
        <a href="#">
          <ImageLazy
            src={
              course?.media?.find((item) => item.title == "main_image")?.[
                "original_url"
              ]
            }
            alt={course.title}
          />
        </a>
      </div>
      <div className="buy-block">
        <button>خرید</button>
      </div>
      {course.discount_price > 0 ? (
        <a class="post-cat" href="#">
          تخفیف : {course.discount_price}
        </a>
      ) : null}
      <div class="post-content">
        <h2 class="post-title title-large">
          <a href="single-post1.html">{course.title}</a>
        </h2>
        <div class="post-meta">
          <span class="post-author">
            <a href="#">جان اسنو</a>
          </span>
          <span class="post-date">
            {convertDateToPersian(course.created_at)}{" "}
          </span>
          <span class="post-author">
            <a href="#">قیمت </a>
          </span>
          <span class="post-date">{course.price}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: course.description ?? "",
          }}
        ></div>
      </div>
    </div>
  );
};
export default CourseCard;
