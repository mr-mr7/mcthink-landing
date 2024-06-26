"use client";

import { getUserCoursesService } from "@/store/userCourses";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import CourseCard from "../../course/CourseCard";
import ImageLazy from "@/components/partials/image-lazy";

const PurchasedCourses = () => {
  const { userCoursesLoading, userCoursesData } = useSelector(
    (state) => state.userCourses
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCoursesService());
  }, []);

  return (
    <>
      {userCoursesLoading ? (
         <div style={{
          display:'flex',
          justifyContent:'center',
          padding:'50px 0px'
         }}>
             <BeatLoader color="#0367a6" />
         </div>
      ) : (
        <>
          {userCoursesData?.map((course) => (
            <div className="col-sm-6">
              <CourseCard course={course} hasBuyBtn={false} />
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default PurchasedCourses;
