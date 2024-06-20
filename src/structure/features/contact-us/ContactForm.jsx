const ContactForm = () => {
  return (
    <>
      <h3 class="secondary-font">تماس با ما</h3>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده
      </p>

      <div class="widget contact-info">
        <div class="contact-info-box">
          <div class="contact-info-box-content">
            <h4>آدرس ما</h4>
            <p>تبریز، نصف راه، جنب بانک ملی، پلاک 456، طبقه 87</p>
          </div>
        </div>

        <div class="contact-info-box">
          <div class="contact-info-box-content">
            <h4>به ما ایمیل بزنید</h4>
            <p>info@sample.com</p>
          </div>
        </div>

        <div class="contact-info-box">
          <div class="contact-info-box-content">
            <h4>با ما تماس بگیرید</h4>
            <p>
              <span class="ltr_text">+98 912 345 67 89</span>
            </p>
          </div>
        </div>
      </div>

      <h3 class="secondary-font top-space">فرم تماس</h3>
      <form
        id="contact-form"
        action="contact-form.php"
        method="post"
        role="form"
      >
        <div class="error-container"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>نام</label>
              <input
                class="form-control form-control-name"
                name="name"
                id="name"
                placeholder=""
                type="text"
                required
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>ایمیل</label>
              <input
                class="form-control form-control-email"
                name="email"
                id="email"
                placeholder=""
                type="email"
                required
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>موضوع</label>
              <input
                class="form-control form-control-subject"
                name="subject"
                id="subject"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>پیام</label>
          <textarea
            class="form-control form-control-message"
            name="message"
            id="message"
            placeholder=""
            rows="10"
            required
          ></textarea>
        </div>
        <div class="text-right">
          <br />
          <button class="btn btn-primary solid blank" type="submit">
            ارسال پیام
          </button>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
