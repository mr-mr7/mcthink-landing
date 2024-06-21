"use client";
import service from "@/service";
import { useState } from "react";

const CommentForm = ({ post_id }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    service.sendCommentData({
      post_id,
      comment,
    });
  };
  return (
    <div class="comments-form">
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
          <button class="comments-btn btn btn-primary" type="submit">
            ارسال دیدگاه
          </button>
        </div>
      </form>
    </div>
  );
};
export default CommentForm;
