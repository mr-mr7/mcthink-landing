const OverlayCard = () => {
  return (
    <div className="post-overaly-style clearfix">
      <div className="post-thumb">
        <a href="single-post1.html">
          <img
            className="img-responsive"
            src="images/news/lifestyle/travel1.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="post-content">
        <h2 className="post-title">
          <a href="single-post1.html">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          </a>
        </h2>
        <div className="post-meta">
          <span className="post-date">3 فروردین 1396</span>
        </div>
      </div>
    </div>
  );
};
export default OverlayCard;
