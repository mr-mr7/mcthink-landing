"use client";
import ProfileSideBar from "@/components/partials/profile/sidebar";
import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import { Api } from "@/api/config";
import Link from "next/link";
import SearchBar from "@/structure/organism/SearchBar";
import { useSelector } from "react-redux";
import Loading from "@/components/ui/Loading";
import { useEffect } from "react";
import Redirecting from "@/components/ui/Redirecting";

const Profile = ({ settings, children }) => {
  const { checkLoginLoading, checkLoginData: isLogin } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isLogin == false) {
      window.location = "/";
    }
  }, [isLogin]);
  return (
    <>
      {checkLoginLoading ? (
        <Loading />
      ) : (
        <>
          {isLogin == null ? (
            <></>
          ) : (
            <>
              {isLogin ? (
                <>
                  <div id="top-bar" className="top-bar">
                    <TopBar socials={settings?.data?.settings} />
                  </div>
                  <div class="main-nav clearfix">
                    <div class="container">
                      <div class="row py-10 d-flex">
                        <div className="logo-top">
                          <Link href="/">
                            <img
                              src={
                                Api.baseImageUrl +
                                settings?.data?.settings?.logo
                              }
                              alt="logo"
                            />
                          </Link>
                        </div>
                        <MainNav />
                        <SearchBar />
                      </div>
                    </div>
                  </div>
                  <section
                    class="block-wrapper"
                    style={{ padding: "25px 0px" }}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                          <ProfileSideBar />
                        </div>
                        <div class="col-md-9 col-sm-12 col-xs-12">
                          {children}
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                <Redirecting />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Profile;
