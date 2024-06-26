import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import httpService from "@/api/httpService";
import { Api } from "@/api/config";

const endpoints = {
  POST_COMMENT_POINT: "comments",
};

const initialState = {
  /*post*/
  commentData: null,
  commentLoading: false,
  commentError: "",
};

const postCommentService = createAsyncThunk(
  "comments/postComment",
  async (body, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.post(
        Api.baseAuthUrl + endpoints.POST_COMMENT_POINT,
        body
      );
      if (res.status == 201) {
        toast.success("کامنت شما با موفقیت ثبت شد.");
        return fulfillWithValue(res.data);
      }
    } catch (err) {
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //post
      .addCase(postCommentService.pending, (state, action) => {
        state.commentLoading = true;
        state.commentError = null;
      })
      .addCase(postCommentService.fulfilled, (state, action) => {
        state.commentData = action.payload.data;
        state.commentLoading = false;
      })
      .addCase(postCommentService.rejected, (state, action) => {
        state.commentError = action.payload;
        state.commentLoading = false;
      });
  },
});

export const {} = commentSlice.actions;

export { postCommentService };

export default commentSlice.reducer;
