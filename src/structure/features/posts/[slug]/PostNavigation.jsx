const PostNavigation = () => {
  return (
    <nav class="post-navigation clearfix">
      <div class="post-previous">
        <a href="#">
          <span>
            <i class="fa fa-angle-right"></i>مطلب قبلی
          </span>
          <h3>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </h3>
        </a>
      </div>
      <div class="post-next">
        <a href="#">
          <span>
            مطلب بعدی <i class="fa fa-angle-left"></i>
          </span>
          <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
        </a>
      </div>
    </nav>
  );
};
export default PostNavigation;
