import BlockTitle from "@/components/ui/BlockTitle";
import Pagination from "@/structure/organism/Pagination";
import { convertDateToPersian } from "@/utility/Moment";

const Courses = (props) => {
  const { courses } = props;
  return (
    <>
      <div class="block category-listing">
        <BlockTitle title={"دوره ها"} />
        <div class="row">
          {courses.length > 0 ? (
            <>
              {courses.map((c, i) => (
                <div class="col-sm-4" key={i}>
                  <div class="post-block-style post-grid clearfix">
                    <div class="post-thumb">
                      <a href="single-post1.html">
                        <img
                          class="img-responsive"
                          src="images/news/lifestyle/health5.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="buy-block">
                      <button>خرید</button>
                    </div>
                    {c.discount_price > 0 ? (
                      <a class="post-cat" href="#">
                        تخفیف : {c.discount_price}
                      </a>
                    ) : null}
                    <div class="post-content">
                      <h2 class="post-title title-large">
                        <a href="single-post1.html">{c.title}</a>
                      </h2>
                      <div class="post-meta">
                        <span class="post-author">
                          <a href="#">جان اسنو</a>
                        </span>
                        <span class="post-date">
                          {convertDateToPersian(c.created_at)}{" "}
                        </span>
                        <span class="post-author">
                          <a href="#">قیمت </a>
                        </span>
                        <span class="post-date">{c.price}</span>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: c.description ?? "",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>
              <span> پستی وجود ندارد</span>
            </div>
          )}
        </div>
      </div>
      {courses.length > 0 ? <Pagination /> : null}
    </>
  );
};
export default Courses;
