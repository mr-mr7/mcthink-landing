import { convertDateToPersian } from "@/utility/Moment";

const ContentHeader = ({ post }) => {
  return (
    <div class="post-title-area">
      <a class="post-cat" href="#">
        {post?.categories[0]?.title ?? ""}
      </a>
      <div>
        <span class="post-date">{post?.sub_title}</span>
      </div>
      <h2 class="post-title" style={{ padding: "0px !important" }}>
        {post?.title}
      </h2>
      <div class="post-meta">
        <span class="post-author">
          <a href="#">{post?.user?.name}</a>
        </span>
        <span class="post-date">
          <i class="fa fa-clock-o"></i> {convertDateToPersian(post?.created_at)}
        </span>
        <span class="post-hits">
          <i class="fa fa-eye"></i> {post?.view_count}
        </span>
        <span class="post-comment">
          <i class="fa fa-comments-o"></i>
          <a href="#" class="comments-link">
            <span>{post?.comments_count}</span>
          </a>
        </span>
      </div>
    </div>
  );
};
export default ContentHeader;
