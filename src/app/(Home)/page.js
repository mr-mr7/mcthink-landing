import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Gapper from "@/components/ui/Gapper";
import FeaturedPostArea from "@/structure/features/home/FeaturedPostArea";
import MiddlePosts from "@/structure/features/home/MiddlePosts";
import VideoBlock from "@/structure/features/home/VideoBlock";
import MoreNews from "@/structure/features/home/MoreNews";
import Footer from "@/components/partials/footer";
import service from "@/service";
import NewestNews from "@/structure/features/home/NewestNews";
import MostVisited from "@/structure/features/home/MostVisited";
import Sidebar from "@/components/partials/sidebar";
import WidgetSocial from "@/structure/organism/WidgetSocial";
import NewestComments from "@/structure/features/home/newestComments";
import Tags from "@/structure/organism/Tags";
import Categories from "@/structure/organism/Categories";
import HeaderIndexPosts from "@/structure/features/home/HeaderIndexPosts";
import NewsLetter from "@/structure/organism/NewsLetter";

const Home = async () => {
  const [newestPosts, mostVisitedPosts, categories, tags, comments] =
    await Promise.all([
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
        .getCategoriesData({
          sort: "posts_count",
        })
        .then((v) => v),
      service.getTagsData().then((v) => v),
      service.getCommentsData().then((v) => v),
    ]);
    console.log(newestPosts , 'newestPosts');
  return (
    <>
      <div id="top-bar" className="top-bar">
        <TopBar />
      </div>
      <div class="main-nav clearfix">
        <MainNav />
      </div>
      <Gapper />
      <section class="featured-post-area no-padding">
        <div class="container">
          <div class="row">
            <FeaturedPostArea />
            <HeaderIndexPosts />
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
                <WidgetSocial />
                <Categories categories={categories?.data.slice(0, 5) ?? []} />
                <Tags tags={tags?.data ?? []} />
              </Sidebar>
            </div>
          </div>
        </div>
      </section>
      <section class="block-wrapper">
        <MiddlePosts />
      </section>
      <section class="block-wrapper video-block">
        <VideoBlock />
      </section>
      <section class="block-wrapper p-bottom-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <MoreNews />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="sidebar sidebar-right">
                <NewestComments comments={comments?.data?.slice(0,5) ?? []}/>
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
