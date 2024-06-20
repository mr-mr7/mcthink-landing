const CommentForm = () => {
  return (
    <div class="comments-form">
      <h3 class="title-normal">دیدگاه خود را بیان کنید</h3>

      <form role="form">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                class="form-control required-field"
                id="message"
                placeholder="دیدگاه شما"
                required
              ></textarea>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <input
                class="form-control"
                name="name"
                id="name"
                placeholder="نام"
                type="text"
                required
              />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <input
                class="form-control"
                name="email"
                id="email"
                placeholder="ایمیل"
                type="email"
                required
              />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <input
                class="form-control"
                placeholder="وب‌سایت"
                type="text"
                required
              />
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
