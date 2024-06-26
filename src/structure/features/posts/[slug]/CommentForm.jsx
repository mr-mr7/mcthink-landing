"use client";
import { postCommentService } from "@/store/commnts";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const CommentForm = ({ post_id }) => {
  const [comment, setComment] = useState("");
  const { checkLoginData: isLogin, commentLoading } = useSelector((state) => ({
    ...state.auth,
    ...state.comments,
  }));
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postCommentService({ post_id, comment }));
  };

  return (
    <div class="comments-form">
      {isLogin ? (
        <>
          <h3 class="title-normal">دیدگاه خود را بیان کنید</h3>
          <form role="form" onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    class="form-control required-field"
                    id="message"
                    placeholder="دیدگاه شما"
                    required
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="clearfix">
              {commentLoading ? (
                <button class="comments-btn btn btn-primary">
                  {<BeatLoader color="#fff" size={10}/>}
                </button>
              ) : (
                <button class="comments-btn btn btn-primary" type="submit">
                  ارسال دیدگاه
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <h3 class="title-normal">برای ارسال دیدگاه وارد شوید</h3>
      )}
    </div>
  );
};
export default CommentForm;
