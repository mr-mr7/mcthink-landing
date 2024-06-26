"use client";

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
    <div className="row">
      {articlesLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px 0px",
          }}
        >
          <BeatLoader color="#0367a6" />
        </div>
      ) : (
        <>
          {articlesData?.map((article) => (
            <div className="col-sm-2">
              <p style={styles.article}>
                <i
                  class="fa fa-file"
                  style={{ fontSize: "42px", color: "#f59e0b" }}
                ></i>
                <span>{article.title}</span>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default ArticleItems;
