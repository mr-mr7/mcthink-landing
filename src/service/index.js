import { Api } from "@/api/config";

class services {
  getPageData = async (endpoint = "", params = {}) => {
    try {
      const res = await fetch(
        Api.baseUrl + endpoint + `?${new URLSearchParams(params).toString()}`,
        {
          method: "get",
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error();
      } else {
        return res.json();
      }
    } catch (error) {
      throw new Error();
    }
  };
}

export default new services();
