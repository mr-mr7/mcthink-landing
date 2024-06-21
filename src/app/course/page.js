import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import service from "@/service";
import Courses from "@/structure/features/course";
import { Api } from "@/api/config";
import Link from "next/link";
import SearchBar from "@/structure/organism/SearchBar";

const Course = async () => {
  const [newestPosts, courseData, categories, settings] = await Promise.all([
    service
      .getPostsData({
        include: "categories",
      })
      .then((v) => v),
    service
      .getCoursesData({
        per_page: 10,
        page:1
      })
      .then((v) => v),
    service
      .getCategoriesData({
        sort: "-posts_count",
      })
      .then((v) => v),
    service.getSettingsData().then((v) => v),
  ]);
  return (
    <> 
      <div id="top-bar" className="top-bar">
        <TopBar socials={settings?.data?.settings} />
      </div>
      <div class="main-nav clearfix">
        <div class="container">
          <div class="row py-10 d-flex">
            <div>
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
      />
    </>
  );
};
export default Course;
