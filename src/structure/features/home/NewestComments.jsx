"use client";
import BlockTitle from "@/components/ui/BlockTitle";
import TextOverflow from "@/utility/TextOverFlow";

const NewestComments = ({ comments }) => {
  return (
    <div class="widget color-default">
      <BlockTitle title={"جدیدترین کامنت ها"} />
      <div class="list-post-block">
        <ul class="list-post review-post-list">
          {comments?.map((c, i) => (
            <li class="clearfix" key={i}>
              <div class="post-block-style post-float clearfix">
                <div class="post-thumb">
                  <a href="single-post1.html">
                    <i
                      className="fa fa-comment"
                      style={{ fontSize: "28px" }}
                    ></i>
                  </a>
                </div>

                <div class="post-content">
                  <h2 class="post-title title-small">
                    <a href="single-post1.html">
                      <TextOverflow>{c.comment}</TextOverflow>
                    </a>
                  </h2>
                  <div class="post-meta newest-comment-info">
                    <div className="d-flex">
                      <p>کاربر :</p>
                      <p>{c?.user?.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NewestComments;
