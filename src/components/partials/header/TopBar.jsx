import moment from "jalali-moment";

const TopHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="ts-date">
            <i className="fa fa-calendar-check-o"></i>
            {moment
              .from(new Date(), "en", "YYYY-MM-DD")
              .locale("fa")
              .format( "jDD MMMM jYYYY")}
          </div>
          <ul className="unstyled top-nav">
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">برای ما بنویسید</a>
            </li>
            <li>
              <a href="#">تبلیغات</a>
            </li>
            <li>
              <a href="#">تماس</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-4 col-xs-12 top-social text-right">
          <ul className="unstyled">
            <li>
              <a title="Facebook" href="#">
                <span className="social-icon">
                  <i className="fa fa-facebook"></i>
                </span>
              </a>
              <a title="Twitter" href="#">
                <span className="social-icon">
                  <i className="fa fa-twitter"></i>
                </span>
              </a>
              <a title="Google+" href="#">
                <span className="social-icon">
                  <i className="fa fa-google-plus"></i>
                </span>
              </a>
              <a title="Linkdin" href="#">
                <span className="social-icon">
                  <i className="fa fa-linkedin"></i>
                </span>
              </a>
              <a title="Rss" href="#">
                <span className="social-icon">
                  <i className="fa fa-rss"></i>
                </span>
              </a>
              <a title="Skype" href="#">
                <span className="social-icon">
                  <i className="fa fa-skype"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
