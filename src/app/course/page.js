import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import service from "@/service";
import Courses from "@/structure/features/course";
import { Api } from "@/api/config";
import Link from "next/link";
import SearchBar from "@/structure/organism/SearchBar";
import { Suspense } from "react";

const Course = async () => {
  const [newestPosts, courseData, categories, settings] = await Promise.all([
    service
      .getPageData(Api.endpoints.post.index, {
        include: "categories",
      })
      .then((v) => v),
    service
      .getPageData(Api.endpoints.course.index, {
        per_page: 10,
        page: 1,
      })
      .then((v) => v),
    service
      .getPageData(Api.endpoints.category.index, {
        sort: "-posts_count",
      })
      .then((v) => v),
    service.getPageData(Api.endpoints.settings.index).then((v) => v),
  ]);
  return (
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
                  src={Api.baseImageUrl + settings?.data?.settings?.logo}
                  alt="logo"
                />
              </Link>
            </div>
            <MainNav />
            <SearchBar />
          </div>
        </div>
      </div>
      <section class="block-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
                <Courses
                  courses={courseData?.data ?? []}
                  meta={courseData?.meta}
                />
            </div>
          </div>
        </div>
      </section>
      <Footer
        newestPosts={newestPosts?.data ?? []}
        categories={categories?.data.slice(0, 5) ?? []}
        settings={settings?.data?.settings}
      />
    </>
  );
};
export default Course;
