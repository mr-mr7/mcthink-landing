import { convertDateToPersian } from "@/utility/Moment";

const ParentComment = ({ comments, className = "" }) => {
  return (
    <>
      {comments?.length > 0 ? (
        <ul className={className}>
          {comments?.map((c, i) => (
            <li>
              <div class="comment">
                <img
                  class="comment-avatar pull-left"
                  alt=""
                  src="/images/news/user1.png"
                />
                <div class="comment-body">
                  <div class="meta-data">
                    <span class="comment-author">{c.user?.name}</span>
                    <span class="comment-date pull-right">
                      {convertDateToPersian(c.created_at)}
                    </span>
                  </div>
                  <div class="comment-content">
                    <p>{c?.comment}</p>
                  </div>
                  <div class="text-left">
                    <a class="comment-reply" href="#">
                      پاسخ
                    </a>
                  </div>
                </div>
              </div>
              <ParentComment
                className="comments-reply"
                comments={c?.children ?? []}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
export default ParentComment;
