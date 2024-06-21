"use client";
import { Api } from "@/api/config";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const emptySizes = {
  xs: {},
  sm: { width: "100px", height: "75px" },
  md: { width: "230px", height: "152px" },
  lg: { width: "360px", height: "240px" },
};

const ImageLazy = (props) => {
  const {
    className = "",
    style = {},
    isStatic = false,
    src,
    size = "md",
    ...rest
  } = props;
  return (
    <>
      <LazyLoadImage
        src={isStatic ? src : Api.baseImageUrl + src}
        className={`img-responsive object-fit-cover ${className}`}
        effect="blur"
        {...rest}
      />
    </>
  );
};
export default ImageLazy;
