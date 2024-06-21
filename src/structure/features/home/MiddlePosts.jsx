"use client";
import BlockTitle from "@/components/ui/BlockTitle";
import OverlayCard from "@/components/ui/OverlayCard";
import RowCard from "@/components/ui/RowCard";
import service from "@/service";
import { SlugGenerator } from "@/utility/Functions";
import { useEffect, useState } from "react";

const getCategoryTitle = (categories = [], categoryId) =>
  categories?.find((c) => c.id == categoryId)?.["title"];

const getData = async (sections) => {
  const [section1Posts, section2Posts, section3Posts] = await Promise.all([
    service
      .getPostsData({
        include: "categories",
        "f[categories.id]": sections?.section1?.category_id ?? null,
      })
      .then((v) => v),
    service
      .getPostsData({
        include: "categories",
        "f[categories.id]": sections?.section2?.category_id ?? null,
      })
      .then((v) => v),
    service
      .getPostsData({
        include: "categories",
        "f[categories.id]": sections?.section3?.category_id ?? null,
      })
      .then((v) => v),
  ]);

  return {
    section1Posts: section1Posts?.data,
    section2Posts: section2Posts?.data,
    section3Posts: section3Posts?.data,
  };
};

const MiddlePosts = ({ sections, categories }) => {
  const [section1Posts, setSection1Posts] = useState([]);
  const [section2Posts, setSection2Posts] = useState([]);
  const [section3Posts, setSection3Posts] = useState([]);
  useEffect(() => {
    getData(sections).then((res) => {
      setSection1Posts(res?.section1Posts);
      setSection2Posts(res?.section2Posts);
      setSection3Posts(res?.section3Posts);
    });
  }, []);
  return (
    <div class="container">
      <div class="row">
        {section1Posts?.length > 0 ? (
          <div class="col-md-4">
            <div class="block color-dark-blue">
              <BlockTitle
                title={getCategoryTitle(
                  categories,
                  sections?.["section1"]?.category_id
                )}
              />
              <OverlayCard indexPost={section1Posts[0]} />
              <div class="list-post-block">
                <ul class="list-post">
                  {section1Posts?.map((p, i) => (
                    <li class="clearfix" key={i}>
                      <RowCard
                        src={
                          p?.media?.find(
                            (item) => item.title == "main_image"
                          )?.["original_url"]
                        }
                        title={p?.title}
                        date={p?.created_at}
                        link={`/posts/${p?.id}/${SlugGenerator(
                          p?.title ?? ""
                        )}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
        {section2Posts?.length > 0 ? (
          <div class="col-md-4">
            <div class="block color-aqua">
              <BlockTitle
                title={getCategoryTitle(
                  categories,
                  sections?.["section2"]?.category_id
                )}
              />
              <OverlayCard indexPost={section2Posts[0]} />
              <div class="list-post-block">
                <ul class="list-post">
                  {section2Posts?.map((p, i) => (
                    <li class="clearfix" key={i}>
                      <RowCard
                        src={
                          p?.media?.find(
                            (item) => item.title == "main_image"
                          )?.["original_url"]
                        }
                        title={p?.title}
                        date={p?.created_at}
                        link={`/posts/${p?.id}/${SlugGenerator(
                          p?.title ?? ""
                        )}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {section3Posts?.length > 0 ? (
          <div class="col-md-4">
            <div class="block color-violet">
              <BlockTitle
                title={getCategoryTitle(
                  categories,
                  sections?.["section3"]?.category_id
                )}
              />
              <OverlayCard indexPost={section3Posts[0]} />
              <div class="list-post-block">
                <ul class="list-post">
                  {section3Posts?.map((p, i) => (
                    <li class="clearfix" key={i}>
                      <RowCard
                        src={
                          p?.media?.find(
                            (item) => item.title == "main_image"
                          )?.["original_url"]
                        }
                        title={p?.title}
                        date={p?.created_at}
                        link={`/posts/${p?.id}/${SlugGenerator(
                          p?.title ?? ""
                        )}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default MiddlePosts;
