const VideoBlock = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="video-tab clearfix">
          <h2 class="video-tab-title">تماشا کنید</h2>
          <div class="col-md-7 pad-r-0">
            <div class="tab-content">
              <div class="tab-pane active animated fadeIn" id="video1">
                <div class="post-overaly-style clearfix">
                  <div class="post-thumb">
                    <img
                      class="img-responsive"
                      src="images/news/video/video4.jpg"
                      alt=""
                    />
                    <a
                      class="popup"
                      href="https://www.youtube.com/embed/XhveHKJWnOQ?autoplay=1&loop=1"
                    >
                      <div class="video-icon">
                        <i class="fa fa-play"></i>
                      </div>
                    </a>
                  </div>
                  <div class="post-content">
                    <a class="post-cat" href="#">
                      ویدئو
                    </a>
                    <h2 class="post-title">
                      <a href="single-post1.html">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و
                      </a>
                    </h2>
                  </div>
                </div>
              </div>

              <div class="tab-pane animated fadeIn" id="video2">
                <div class="post-overaly-style clearfix">
                  <div class="post-thumb">
                    <img
                      class="img-responsive"
                      src="images/news/video/video3.jpg"
                      alt=""
                    />
                    <a
                      class="popup"
                      href="https://www.youtube.com/embed/wJF5NXygL4k?autoplay=1&loop=1"
                    >
                      <div class="video-icon">
                        <i class="fa fa-play"></i>
                      </div>
                    </a>
                  </div>
                  <div class="post-content">
                    <a class="post-cat" href="#">
                      ویدئو
                    </a>
                    <h2 class="post-title title-medium">
                      <a href="single-post1.html">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده
                      </a>
                    </h2>
                  </div>
                </div>
              </div>

              <div class="tab-pane animated fadeIn" id="video3">
                <div class="post-overaly-style clearfix">
                  <div class="post-thumb">
                    <img
                      class="img-responsive"
                      src="images/news/video/video2.jpg"
                      alt=""
                    />
                    <a
                      class="popup"
                      href="https://www.youtube.com/embed/DQNDcxRo-2M?autoplay=1&loop=1"
                    >
                      <div class="video-icon">
                        <i class="fa fa-play"></i>
                      </div>
                    </a>
                  </div>
                  <div class="post-content">
                    <a class="post-cat" href="#">
                      ویدئو
                    </a>
                    <h2 class="post-title title-medium">
                      <a href="single-post1.html">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5 pad-l-0">
            <ul class="nav nav-tabs">
              <li class="active">
                <a class="animated fadeIn" href="#video1" data-toggle="tab">
                  <div class="post-thumb">
                    <img
                      class="img-responsive"
                      src="images/news/video/video4.jpg"
                      alt=""
                    />
                  </div>
                  <h3>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  </h3>
                </a>
              </li>
              <li>
                <a class="animated fadeIn" href="#video2" data-toggle="tab">
                  <div class="post-thumb">
                    <img
                      class="img-responsive"
                      src="images/news/video/video3.jpg"
                      alt=""
                    />
                  </div>
                  <h3>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده
                  </h3>
                </a>
              </li>
              <li>
                <a class="animated fadeIn" href="#video3" data-toggle="tab">
                  <div class="post-thumb">
                    <img
                      class="img-responsive"
                      src="images/news/video/video2.jpg"
                      alt=""
                    />
                  </div>
                  <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoBlock;
