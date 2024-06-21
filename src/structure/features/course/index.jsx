"use client";
import ImageLazy from "@/components/partials/image-lazy";
import BlockTitle from "@/components/ui/BlockTitle";
import service from "@/service";
import Pagination from "@/structure/organism/Pagination";
import { convertDateToPersian } from "@/utility/Moment";
import { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = (props) => {
  const { courses, meta } = props;
  const [data, setData] = useState(courses);
  console.log(courses, "courses");
  const firstRender = useRef(true);
  const [currentPage, setCurrentPage] = useState(meta?.current_page || 1);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      service
        .getCoursesData({
          page: currentPage,
          per_page: 10,
        })
        .then((res) => {
          setData(res.data);
        });
    }
  }, [currentPage]);
  return (
    <>
      <div class="block category-listing">
        <BlockTitle title={"دوره ها"} />
        <div class="row">
          {data.length > 0 ? (
            <>
              {data.map((c, i) => (
                <div class="col-sm-4" key={i}>
                  <CourseCard course={c} />
                </div>
              ))}
            </>
          ) : (
            <div>
              <span> دوره ایی وجود ندارد</span>
            </div>
          )}
        </div>
      </div>
      {courses.length > 0 ? (
        <Pagination
          totalPage={Math.ceil(meta?.total / meta?.per_page)}
          currentPage={currentPage}
          handleChangePage={(page) => {
            setCurrentPage(page);
          }}
        />
      ) : null}
    </>
  );
};
export default Courses;
