"use client";
import BlockTitle from "@/components/ui/BlockTitle";
import service from "@/service";
import Pagination from "@/structure/organism/Pagination";
import { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";
import Alert from "@/components/ui/Alert";
import { Api } from "@/api/config";
import CourseCardv2 from '@/components/ui/CourseCardV2'

const Courses = (props) => {
  const { courses, meta } = props;
  const [data, setData] = useState(courses);
  const firstRender = useRef(true);
  const [currentPage, setCurrentPage] = useState(meta?.current_page || 1);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      service
        .getPageData(Api.endpoints.course.index, {
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
                  <CourseCardv2  course={c}/>
                </div>
              ))}
            </>
          ) : (
            <div>
              <Alert title="دوره ایی برای نمایش وجود ندارد" type="warning" />
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
