"use client";
import { logoutAction } from "@/store/auth";
import moment from "jalali-moment";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  authBtn: {
    display: "flex",
    justifyContent: "end",
    cursor: "pointer",
  },
};

const TopHeader = ({ socials = {} }) => {
  const { checkLoginData: isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="ts-date">
            <i className="fa fa-calendar-check-o"></i>
            {moment
              .from(new Date(), "en", "YYYY-MM-DD")
              .locale("fa")
              .format("jDD MMMM jYYYY")}
          </div>
          <ul className="unstyled top-nav">
            <li>
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li>
              <Link href="/contact-us">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-4 col-xs-12 top-social text-right">
          <ul className="unstyled">
            {isLogin == null || isLogin == false ? (
              <li style={styles.authBtn}>
                <Link href={"/login"}>ورود</Link>
                <a>/</a>
                <Link href={"/register"}>ثبت نام</Link>
              </li>
            ) : (
              <li style={styles.authBtn}>
                <a onClick={() => dispatch(logoutAction())}>خروج</a>
                <a>/</a>
                <Link href={"/profile"}>پنل کاربری</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
