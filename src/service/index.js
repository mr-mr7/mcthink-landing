import { Api } from "@/api/config";
import axios from "axios";

class services {
  //   getPostData = async () => {
  //     try {
  //       const res = await fetch(Api.baseUrl + Api.endpoints.post.index, {
  //         method: "get",
  //         cache: "no-store",

  //       });
  //       if (!res.ok) {
  //         throw new Error();
  //       } else {
  //         return res.json();
  //       }
  //     } catch (error) {
  //         console.log(error , 'err');
  //       throw new Error();
  //     }
  //   };
  getCoursesData = async () => {
    try {
      const res = await axios.get(Api.baseUrl + Api.endpoints.course.index, {
        headers: {
          "x-dev": "89aGGsd445DSFDF$%569F",
        },
      });
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getCoursesData = async () => {
    try {
      const res = await axios.get(Api.baseUrl + Api.endpoints.course.index, {
        headers: {
          "x-dev": "89aGGsd445DSFDF$%569F",
        },
      });
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getCommentsData = async (params) => {
    try {
      const res = await axios.get(Api.baseUrl + Api.endpoints.comments.index, {
        headers: {
          "x-dev": "89aGGsd445DSFDF$%569F",
        },
        params,
      });
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getPostData = async (Slug) => {
    try {
      const res = await axios.get(
        Api.baseUrl + Api.endpoints.post.show.replace("{Id}", Slug),
        {
          headers: {
            "x-dev": "89aGGsd445DSFDF$%569F",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getRelatedPostsData = async (id) => {
    try {
      const res = await axios.get(
        Api.baseUrl + Api.endpoints.post.related.replace("{Id}", id),
        {
          headers: {
            "x-dev": "89aGGsd445DSFDF$%569F",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getPostsData = async (params = {}) => {
    try {
      const res = await axios.get(Api.baseUrl + Api.endpoints.post.index, {
        headers: {
          "x-dev": "89aGGsd445DSFDF$%569F",
        },
        params,
      });

      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getCategoriesData = async (params = {}) => {
    try {
      const res = await axios.get(Api.baseUrl + Api.endpoints.category.index, {
        headers: {
          "x-dev": "89aGGsd445DSFDF$%569F",
        },
        params,
      });
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
  getTagsData = async (params = {}) => {
    try {
      const res = await axios.get(Api.baseUrl + Api.endpoints.tag.index, {
        headers: {
          "x-dev": "89aGGsd445DSFDF$%569F",
        },
        params,
      });
      return res.data;
    } catch (error) {
      console.log(error, "err");
    }
  };
}

export default new services();
