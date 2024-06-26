import ImageLazy from "@/components/partials/image-lazy";
import { postCourseService } from "@/store/course";
import { convertDateToPersian } from "@/utility/Moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const styles = {
  bold: {
    fontWeight: "bold",
  },
  fontMd: {
    fontSize: "14px",
  },
  fontLg: {
    fontSize: "18px",
  },
  postMeta: {
    display: "flex",
    marginBottom: "18px",
    gap: "12px",
  },
};

const CourseCard = (props) => {
  const { course, hasBuyBtn = true } = props;
  const dispatch = useDispatch();
  const { courseLoading } = useSelector((state) => state.course);
  const [buyId, setBuyId] = useState(null);
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
      {hasBuyBtn && (
        <div className="buy-block">
          {courseLoading == true && buyId == course.id ? (
            <button>
              <BeatLoader color="#fff" size={8} />
            </button>
          ) : (
            <button
              onClick={() => {
                setBuyId(course.id);
                dispatch(
                  postCourseService({
                    course_id: course.id,
                  })
                );
              }}
            >
              خرید
            </button>
          )}
        </div>
      )}
      {course.discount_price > 0 ? (
        <a class="post-cat" style={styles.fontMd}>
          تخفیف : {course.discount_price}
        </a>
      ) : null}
      <div class="post-content">
        <h2 class="post-title title-large">
          <a href="#">{course.title}</a>
        </h2>
        <div class="post-meta" style={styles.postMeta}>
          <span class="post-author" style={styles.fonts}>
            <a href="#">تاریخ انتشار </a>
          </span>
          <span class="post-date">
            {convertDateToPersian(course.created_at)}{" "}
          </span>
          <span class="post-author" style={styles.fonts}>
            <a href="#">قیمت </a>
          </span>
          <span class="post-date" style={{ ...styles.fontLg, ...styles.bold }}>
            {course.price}
          </span>
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
