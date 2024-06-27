import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import httpService from "@/api/httpService";
import { Api } from "@/api/config";

const endpoints = {
  GET_ARTICLES_POINT: "articles",
  POST_ARTICLE_POINT: "articles",
};

const initialState = {
  /*get*/
  articlesData: null,
  articlesLoading: false,
  articlesError: "",
  /*post*/
  postArticleData: null,
  postArticleLoading: false,
  postArticleError: "",
};

const getArticlesService = createAsyncThunk(
  "articles/getArticles",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.get(
        Api.userBaseUrl + endpoints.GET_ARTICLES_POINT
      );
      if (res.status == 200) {
        toast.success(res.data?.message);
        return fulfillWithValue(res.data);
      }
    } catch (err) {
      setErrors(httpService.setErrors());
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);
const postArticleService = createAsyncThunk(
  "articles/postArticle",
  async (
    { body, setErrors },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      const res = await httpService.post(
        Api.userBaseUrl + endpoints.POST_ARTICLE_POINT,
        body
      );
      if (res.status == 201) {
        toast.success("ثبت با موفقیت انجام شد");
        await dispatch(getArticlesService());
        return fulfillWithValue(res.data);
      }
    } catch (err) {
      setErrors(httpService.setErrors());
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getArticlesService.pending, (state, action) => {
        state.articlesLoading = true;
        state.articlesError = null;
      })
      .addCase(getArticlesService.fulfilled, (state, action) => {
        state.articlesData = action.payload?.data;
        state.articlesLoading = false;
      })
      .addCase(getArticlesService.rejected, (state, action) => {
        state.articlesError = action.payload;
        state.articlesLoading = false;
      })
      //post
      .addCase(postArticleService.pending, (state, action) => {
        state.postArticleData = true;
        state.postArticleError = null;
      })
      .addCase(postArticleService.fulfilled, (state, action) => {
        state.postArticleData = action.payload?.data;
        state.postArticleLoading = false;
      })
      .addCase(postArticleService.rejected, (state, action) => {
        state.postArticleError = action.payload;
        state.postArticleLoading = false;
      });
  },
});

export const {} = articlesSlice.actions;

export { getArticlesService, postArticleService };

export default articlesSlice.reducer;
