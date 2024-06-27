"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ProfileSideBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="panel-sidebar">
        <ul>
          <>
            <Link href={"/profile/purchased-courses"}>
              <li
                className={`${
                  pathname == "/profile/purchased-courses"
                    ? "panel-sidebar-active"
                    : ""
                }`}
              >
                <i class="fa fa-money"></i>
                <span>دوره های خریداری شده</span>
              </li>
            </Link>
            <Link href={"/profile/articles"}>
              <li
                className={`${
                  pathname == "/profile/articles" ? "panel-sidebar-active" : ""
                }`}
              >
                <i class="fa fa-file"></i>
                <span>مقاله ها</span>
              </li>
            </Link>
            <Link href={"/profile/change-password"}>
              <li
                className={`${
                  pathname == "/profile/change-password"
                    ? "panel-sidebar-active"
                    : ""
                }`}
              >
                <i class="fa fa-lock"></i>
                <span>تغییر رمز عبور</span>
              </li>
            </Link>
          </>
        </ul>
      </div>
    </>
  );
};
export default ProfileSideBar;
