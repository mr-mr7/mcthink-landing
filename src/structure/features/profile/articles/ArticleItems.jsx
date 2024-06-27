"use client";

import { Api } from "@/api/config";
import { getArticlesService } from "@/store/articles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const styles = {
  article: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    justifyContent: "center",
    position: "relative",
  },
  download: {
    fontSize: "14px",
    top: "-20px",
    left: "0px",
    color: "gray",
    position: "absolute",
  },
};

const ArticleItems = () => {
  const dispatch = useDispatch();
  const { articlesData, articlesLoading } = useSelector(
    (state) => state.articles
  );
  useEffect(() => {
    dispatch(getArticlesService());
  }, []);

  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "48px",
      }}
    >
      {articlesLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "25px 0px",
            width: "100%",
          }}
        >
          <BeatLoader color="#0367a6" />
        </div>
      ) : (
        <>
          {articlesData?.map((article) => (
            <p style={styles.article}>
              <i
                class="fa fa-file"
                style={{ fontSize: "42px", color: "#f59e0b" }}
              ></i>
              <span>{article.title}</span>
              <a
                style={styles.download}
                href={Api.baseUrl + article?.media[0]?.original_url}
                target="_blank"
              >
                <i class="fa cursor-pointer fa-download"></i>
              </a>
            </p>
          ))}
        </>
      )}
    </div>
  );
};
export default ArticleItems;
