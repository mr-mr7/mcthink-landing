const NotFound = () => {
  return (
    <section class="block-wrapper">
      <div class="container">
        <div class="row">
          <div class="error-page text-center">
            <div class="error-code">
              <h2>
                <strong>404</strong>
              </h2>
            </div>
            <div class="error-message">
              <h3 class="secondary-font">صفحه مورد نظر یافت نشد!</h3>
            </div>
            <div class="error-body">
              از دکمه زیر برای رفتن به صفحه اصلی استفاده کنید <br />
              <a href="index.html" class="btn btn-primary">
                بازگشت به صفحه اصلی
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
