import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import service from "@/service";
import WidgetSocial from "@/structure/organism/WidgetSocial";
import Categories from "@/structure/organism/Categories";
import Tags from "@/structure/organism/Tags";
import CategoryPosts from "@/structure/features/category/[slug]/CategoryPosts";
import Sidebar from "@/components/partials/sidebar";

const TagsPage = async ({ params: { slug } }) => {
  const [tagsPosts, categories, tags] = await Promise.all([
    service
      .getPostsData({
        include: "media,categories",
        "f[tags.id]": slug[0],
      })
      .then((v) => v),
    service
      .getCategoriesData({
        sort: "-posts_count",
      })
      .then((v) => v),
    service.getTagsData().then((v) => v),
  ]);
  return (
    <>
      <div id="top-bar" className="top-bar">
        <TopBar />
      </div>
      <div class="main-nav clearfix">
        <MainNav />
      </div>
      <section class="block-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <CategoryPosts
                title={decodeURIComponent(slug[1])}
                posts={tagsPosts?.data ?? []}
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
      <Footer />
    </>
  );
};
export default TagsPage;
