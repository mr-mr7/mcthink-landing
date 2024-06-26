"use client";
import Link from "next/link";
import ImageLazy from "../image-lazy";
import { SlugGenerator } from "@/utility/Functions";
import { convertDateToPersian } from "@/utility/Moment";
import TextOverflow from "@/utility/TextOverFlow";

const Footer = (props) => {
  const { newestPosts, categories, settings } = props;
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-main">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xs-12 footer-widget">
                <h3 class="widget-title">خبرهای داغ</h3>
                <div class="list-post-block">
                  <ul class="list-post">
                    {newestPosts?.slice(0, 3)?.map((p, i) => (
                      <li class="clearfix" key={i}>
                        <div class="post-block-style post-float clearfix">
                          <div class="post-thumb">
                            <Link
                              href={`/posts/${p.id}/${SlugGenerator(p.title)}`}
                            >
                              <ImageLazy
                                src={
                                  p?.media?.find(
                                    (item) => item.title == "main_image"
                                  )?.["original_url"] ?? ""
                                }
                                alt={p.title}
                                size="sm"
                              />
                            </Link>
                          </div>
                          <div class="post-content">
                            <span class="post-date">
                              <TextOverflow number={30}>
                                {p.sub_title}
                              </TextOverflow>
                            </span>
                            <h2 class="post-title post-title-footer  title-small">
                              <Link
                                href={`/posts/${p.id}/${SlugGenerator(
                                  p.title
                                )}`}
                              >
                                <TextOverflow number={30}>
                                  {p.title}
                                </TextOverflow>
                              </Link>
                            </h2>
                            <div class="post-meta">
                              <span class="post-date">
                                {convertDateToPersian(p.created_at)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-xs-12 footer-widget widget-categories">
                <h3 class="widget-title">موضوعات داغ</h3>
                <ul>
                  {categories.map((c, i) => (
                    <li>
                      <Link
                        href={`/category/${c.id}/${SlugGenerator(c.title)}`}
                      >
                        <span class="catTitle">{c.title}</span>
                        <span class="catCounter"> ({c.posts_count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="col-md-3 col-xs-12">
                <h3 class="widget-title">دسترسی سریع</h3>
                <ul>
                  <li>
                    <Link href="/contact-us">
                      <span>تماس با ما</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <span>درباره ی ما</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                class="col-md-2 col-xs-12 footer-widget widget-categories"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Link href="/">
                  <img src="/images/logos/footer-logo.png" alt="" />
                </Link>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span>تلفن تماس :</span>
                  <span>{settings?.phone}</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span> موبایل :</span>
                  <span>{settings?.mobile}</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span> ایمیل :</span>
                  <span>{settings?.email}</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span> آدرس :</span>
                  <span>{settings?.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="copyright-info text-center">
                <span>
                  تمامی حقوق مادی و معنوی متعلق به موسسه مطبوعاتی بازار پول و
                  ارز می باشد.
                </span>
              </div>
            </div>
          </div>

          <div
            id="back-to-top"
            data-spy="affix"
            data-offset-top="10"
            class="back-to-top affix"
          >
            <button
              class="btn btn-primary"
              title="Back to Top"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <i class="fa fa-angle-up"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
