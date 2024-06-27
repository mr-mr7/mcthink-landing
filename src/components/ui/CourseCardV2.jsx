"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageLazy from "../partials/image-lazy";
import { postCourseService } from "@/store/course";
import { BeatLoader } from "react-spinners";

const CourseCardV2 = (props) => {
  const { course, hasBuyBtn = true } = props;
  const dispatch = useDispatch();
  const { courseLoading } = useSelector((state) => state.course);
  const [buyId, setBuyId] = useState(null);
  return (
    <>
      <figure class="snip1278">
        <h4>{course?.title}</h4>
        <div class="image">
          <ImageLazy
            src={
              course?.media?.find((item) => item.title == "main_image")?.[
                "original_url"
              ]
            }
            alt={course.title}
          />
        </div>
        <figcaption>
          <div
            dangerouslySetInnerHTML={{
              __html: course.description ?? "",
            }}
          ></div>
          <div class="price">
            {course.discount_price > 0 ? <s>{course?.price}</s> : null}
            <span>{course?.price - course?.discount_price}</span>
          </div>
        </figcaption>
        {hasBuyBtn && (
          <>
            {courseLoading == true && buyId == course.id ? (
              <a class="add-to-cart">
                <BeatLoader color="#fff" size={8} />
              </a>
            ) : (
              <a
                class="add-to-cart"
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
              </a>
            )}
          </>
        )}
      </figure>
    </>
  );
};
export default CourseCardV2;
