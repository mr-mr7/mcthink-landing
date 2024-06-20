import TopBar from "@/components/partials/header/TopBar";
import MainNav from "@/components/partials/header/MainNav";
import Footer from "@/components/partials/footer";
import Sidebar from "@/components/partials/sidebar";
import WidgetSocial from "@/structure/organism/WidgetSocial";
import Categories from "@/structure/organism/Categories";
import Tags from "@/structure/organism/Tags";
import PostNavigation from "@/structure/features/posts/[slug]/PostNavigation";
import AuthorBox from "@/structure/features/posts/[slug]/AuthorBox";
import RelatedPosts from "@/structure/features/posts/[slug]/RelatedPosts";
import CommentForm from "@/structure/features/posts/[slug]/CommentForm";
import ContentHeader from "@/structure/features/posts/[slug]/content/Header";
import Content from "@/structure/features/posts/[slug]/content";
import RelatedTags from "@/structure/features/posts/[slug]/content/RelatedTags";
import Sharing from "@/structure/features/posts/[slug]/content/Sharing";
import service from "@/service";
import Comments from "@/structure/features/posts/[slug]/comments/index";
import { buildTreeArray, flatToTree } from "@/utility/Functions";

const Post = async ({ params: { slug } }) => {
  const [post, relatedPosts, categories, tags, comments] = await Promise.all([
    service.getPostData(slug[0]).then((v) => v),
    service.getRelatedPostsData(slug[0]).then((v) => v),
    service
      .getCategoriesData({
        sort: "-posts_count",
      })
      .then((v) => v),
    service.getTagsData().then((v) => v),
    service.getCommentsData({
      "f[post_id]": slug[0],
    }),
  ]);
  console.log(comments, "comments");
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
              <div class="single-post">
                <ContentHeader post={post?.data} />
                <div class="post-content-area">
                  <Content post={post?.data} />
                  <RelatedTags />
                  <Sharing />
                </div>
              </div>
              <PostNavigation />
              <AuthorBox />
              <RelatedPosts relatedPosts={relatedPosts?.data ?? []} />
              <Comments
                comments={comments?.data ? flatToTree(comments?.data) : []}
              />
              <CommentForm />
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
export default Post;
