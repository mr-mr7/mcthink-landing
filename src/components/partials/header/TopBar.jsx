import moment from "jalali-moment";
import Link from "next/link";

const TopHeader = ({ socials={} }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12">
          <div className="ts-date">
            <i className="fa fa-calendar-check-o"></i>
            {moment
              .from(new Date(), "en", "YYYY-MM-DD")
              .locale("fa")
              .format("jDD MMMM jYYYY")}
          </div>
          <ul className="unstyled top-nav">
            <li>
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li>
              <Link href="/contact-us">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-4 col-xs-12 top-social text-right">
          <ul className="unstyled">
            <li>
              {[
                {
                  icon: "instagram",
                  url: socials.instagram,
                },
                {
                  icon: "facebook",
                  url: socials.facebook,
                },
                {
                  icon: "twitter",
                  url: socials.twitter,
                },
                {
                  icon: "google-plus",
                  url: socials.google_plus,
                },
                {
                  icon: "telegram",
                  url: socials.telegram,
                },
                {
                  icon: "youtube",
                  url: socials.youtube,
                },
              ].map((s) => (
                <a href={s.url} target="_blank">
                  <span className="social-icon">
                    <i className={`fa fa-${s.icon}`}></i>
                  </span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
