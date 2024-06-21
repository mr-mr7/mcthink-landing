"use client";
import Link from "next/link";
import { useState } from "react";
const MainNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav class="site-navigation navigation">
      <div class="site-nav-inner pull-left">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span class="sr-only">تغییر وضعیت ناوبری</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div
          class={`collapse navbar-collapse navbar-responsive-collapse  ${
            toggleMenu ? "in" : ""
          }`}
        >
          <ul class="nav navbar-nav" style={{marginRight:'12px'}}>
            <li></li>
            <li>
              <Link href="/course">دور ها</Link>
            </li>
            <li>
              <a href="/about-us">درباره ی ما</a>
            </li>
            <li>
              <a href="/contact-us">تماس با ما</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
