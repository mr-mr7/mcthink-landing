export const Api = {
  baseUrl: "https://mcthink.liara.run/api/v1/",
  baseImageUrl: "https://mcthink.liara.run",
  endpoints: {
    post: {
      index: "posts",
      related: "posts/related/{Id}",
      show: "posts/{Id}",
    },
    category: {
      index: "categories",
    },
    tag: {
      index: "tags",
    },
    course: {
      index: "courses",
    },
    comments: {
      index: "comments",
    },
    settings: {
      index: "settings",
    },
  },
};
