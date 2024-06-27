import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import httpService from "@/api/httpService";
import { Api } from "@/api/config";

const endpoints = {
  POST_COURSE_BUY_POINT: "courses/buy",
};

const initialState = {
  /*post*/
  courseData: null,
  courseLoading: false,
  courseError: "",
};

const postCourseService = createAsyncThunk(
  "course/postCourse",
  async (body, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.post(
        Api.userBaseUrl + endpoints.POST_COURSE_BUY_POINT,
        body
      );
      if (res.status == 200) {
        toast.success("فرم پرداخت با موفقیت ساخته شد.");
        return fulfillWithValue(res.data);
      }
    } catch (err) {
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //post
      .addCase(postCourseService.pending, (state, action) => {
        state.courseLoading = true;
        state.courseError = null;
      })
      .addCase(postCourseService.fulfilled, (state, action) => {
        state.courseData = action.payload.data;
        state.courseLoading = false;
      })
      .addCase(postCourseService.rejected, (state, action) => {
        state.courseError = action.payload;
        state.courseLoading = false;
      });
  },
});

export const {} = courseSlice.actions;

export { postCourseService };

export default courseSlice.reducer;
