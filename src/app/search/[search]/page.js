import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import service from "@/service";
import WidgetSocial from "@/structure/organism/WidgetSocial";
import Categories from "@/structure/organism/Categories";
import Tags from "@/structure/organism/Tags";
import Sidebar from "@/components/partials/sidebar";
import TwoColumnPosts from "@/structure/organism/TwoColumnPosts";
import SearchBar from "@/structure/organism/SearchBar";
import Link from "next/link";
import { Api } from "@/api/config";

const Category = async ({ params: { search } }) => {
  const [newestPosts, posts, categories, tags, settings] = await Promise.all([
    service
      .getPostsData({
        include: "categories",
      })
      .then((v) => v),
    service
      .getPostsData({
        include: "categories",
        title: search.split("_").join(" "),
        per_page: 10,
        page: 1,
      })
      .then((v) => v),
    service
      .getCategoriesData({
        sort: "-posts_count",
      })
      .then((v) => v),
    service.getTagsData().then((v) => v),
    service.getSettingsData().then((v) => v),
  ]);
  console.log(settings?.data?.settings, "settings?.data?.settings");
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
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <TwoColumnPosts
                title={`نتیجه ی سرچ بر اساس عنوان : ${decodeURIComponent(
                  search
                )}`}
                posts={posts?.data ?? []}
                meta={posts?.meta}
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Sidebar>
                <WidgetSocial socials={settings?.data?.settings} />
                <Categories categories={categories?.data.slice(0, 5) ?? []} />
                <Tags tags={tags?.data ?? []} />
              </Sidebar>
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
export default Category;