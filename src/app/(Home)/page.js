import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Gapper from "@/components/ui/Gapper";
import FeaturedPostArea from "@/structure/features/home/FeaturedPostArea";
import MiddlePosts from "@/structure/features/home/MiddlePosts";
import VideoBlock from "@/structure/features/home/VideoBlock";
import Footer from "@/components/partials/footer";
import service from "@/service";
import NewestNews from "@/structure/features/home/NewestNews";
import MostVisited from "@/structure/features/home/MostVisited";
import Sidebar from "@/components/partials/sidebar";
import WidgetSocial from "@/structure/organism/WidgetSocial";
import NewestComments from "@/structure/features/home/NewestComments";
import Tags from "@/structure/organism/Tags";
import Categories from "@/structure/organism/Categories";
import HeaderIndexPosts from "@/structure/features/home/HeaderIndexPosts";
import SearchBar from "@/structure/organism/SearchBar";
import { Api } from "@/api/config";
import Link from "next/link";
import MostDiscussedPosts from "@/structure/features/home/MostDiscussedPosts";

const Home = async () => {
  const [
    newestPosts,
    mostVisitedPosts,
    mostDiscussedPosts,
    categories,
    tags,
    comments,
    settings,
  ] = await Promise.all([
    service
      .getPostsData({
        include: "categories",
      })
      .then((v) => v),
    service
      .getPostsData({
        include: "categories",
        sort: "-view_count",
      })
      .then((v) => v),
    service
      .getPostsData({
        include: "categories",
        sort: "-comments_count",
      })
      .then((v) => v),
    service
      .getCategoriesData({
        sort: "-posts_count",
      })
      .then((v) => v),
    service.getTagsData().then((v) => v),
    service.getCommentsData().then((v) => v),
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
                  src={Api.baseImageUrl + settings?.data?.settings?.header_logo}
                  alt="logo"
                />
              </Link>
            </div>
            <MainNav />
            <SearchBar />
          </div>
        </div>
      </div>
      <Gapper />
      <section class="featured-post-area no-padding">
        <div class="container">
          <div class="row">
            <FeaturedPostArea
              posts={settings?.data?.posts ?? []}
              sliders={
                JSON.parse(settings?.data?.settings?.post_slider ?? "{}")
                  ?.sliders
              }
            />
            <HeaderIndexPosts
              posts={settings?.data?.posts}
              postSlider={settings?.data?.settings?.post_slider}
            />
          </div>
        </div>
      </section>
      <section class="block-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <NewestNews newestPosts={newestPosts?.data ?? []} />
              <Gapper />
              <MostVisited
                indexPost={mostVisitedPosts?.data[0]}
                mostVisitedPosts={mostVisitedPosts?.data?.slice(1, 5) ?? []}
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
      <section class="block-wrapper">
        <MiddlePosts
          sections={JSON.parse(settings?.data?.settings?.sections ?? "{}")}
          categories={settings?.data?.categories}
        />
      </section>
      <section class="block-wrapper video-block">
        <VideoBlock
          sections={JSON.parse(settings?.data?.settings?.sections ?? "{}")}
        />
      </section>
      <section class="block-wrapper p-bottom-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <MostDiscussedPosts posts={mostDiscussedPosts?.data ?? []} />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="sidebar sidebar-right">
                <NewestComments comments={comments?.data?.slice(0, 5) ?? []} />
              </div>
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
export default Home;
