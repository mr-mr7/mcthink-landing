const NewsLetter = () => {
  return (
    <div class="widget m-bottom-0">
      <h3 class="block-title">
        <span>خبرنامه</span>
      </h3>
      <div class="ts-newsletter">
        <div class="newsletter-introtext">
          <h4>به روز باشید</h4>
          <p>با عضویت در خبرنامه جدیدترین اخبار را در ایمیل خود دریافت کنید!</p>
        </div>

        <div class="newsletter-form">
          <form action="#" method="post">
            <div class="form-group">
              <input
                type="email"
                name="email"
                id="newsletter-form-email"
                class="form-control form-control-lg"
                placeholder="ایمیل"
                autocomplete="off"
              />
              <button class="btn btn-primary">عضویت</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
