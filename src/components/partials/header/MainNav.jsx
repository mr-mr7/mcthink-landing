"use client";

import { useState } from "react";

const MainNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div class="container">
      <div class="row py-10">
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
              <ul class="nav navbar-nav">
                <li>
                  <a href="category-style2.html">
                    <img src="/images/logos/logo.png" alt="" />
                  </a>
                </li>
                <li class="active">
                  <a href="category-style2.html">تکنولوژی</a>
                </li>
                <li>
                  <a href="category-style2.html">تکنولوژی</a>
                </li>
                <li>
                  <a href="category-style2.html">تکنولوژی</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="search-block ">
          <input
            type="text"
            class="form-control"
            placeholder="عبارت را وارد نموده و اینتر بزنید"
          />
          <span class="search-icon">
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainNav;
