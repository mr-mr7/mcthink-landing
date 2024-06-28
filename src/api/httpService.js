import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class HttpService {
  constructor() {
    this.errors = {};
    //request setting
    axios.interceptors.request.use(
      (config) => {
        // config.headers["x-dev"] = "89aGGsd445DSFDF$%569F";
        if (cookies.get("token")) {
          config.headers["Authorization"] = `Bearer ${cookies.get("token")}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //response setting
    axios.interceptors.response.use(null, (error) => {
      if (error.response) {
        if (error.response.status == 422) {
          if (
            typeof error.response.data.errors == "object" &&
            !Array.isArray(error.response.data.errors)
          ) {
            this.errors = error.response.data.errors;
          }
          if (
            Array.isArray(error.response.data.errors) &&
            error.response.data?.errors?.length == 0
          ) {
            this.errors = {};
          }
        }
      }
      toast.error(error?.response?.data?.message);
      return Promise.reject(error);
    });
  }
  //http methods
  get(url, config) {
    return axios.get(url, config);
  }
  post(url, data, config) {
    return axios.post(url, data, config);
  }
  put(url, data, config) {
    return axios.put(url, data, config);
  }
  delete(url, config) {
    return axios.delete(url, config);
  }
  setErrors() {
    return this.errors;
  }
}
export default new HttpService();
