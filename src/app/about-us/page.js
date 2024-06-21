import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import SearchBar from "@/structure/organism/SearchBar";
import Sidebar from "@/components/partials/sidebar";
import WidgetSocial from "@/structure/organism/WidgetSocial";
import Tags from "@/structure/organism/Tags";
import Categories from "@/structure/organism/Categories";
import service from "@/service";
import AboutUsDes from "@/structure/features/about-us";
import { Api } from "@/api/config";
import Link from "next/link";

const AboutUs = async () => {
  const [newestPosts, categories, tags, settings] = await Promise.all([
    service
      .getPostsData({
        include: "categories",
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
              <AboutUsDes text={settings?.data?.settings?.about_us} />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <Sidebar class="sidebar sidebar-right">
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
export default AboutUs;
