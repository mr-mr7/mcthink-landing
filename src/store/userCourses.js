import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import httpService from "@/api/httpService";
import { Api } from "@/api/config";

const endpoints = {
  GET_USER_COURSES_POINT: "user/courses",
};

const initialState = {
  /*user-course*/
  userCoursesData: null,
  userCoursesLoading: false,
  userCoursesError: "",
};

const getUserCoursesService = createAsyncThunk(
  "userCourses/getUserCourses",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.get(
        Api.baseUrl + endpoints.GET_USER_COURSES_POINT
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

const userCoursesSlice = createSlice({
  name: "userCourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login
      .addCase(getUserCoursesService.pending, (state, action) => {
        state.userCoursesLoading = true;
        state.userCoursesError = null;
      })
      .addCase(getUserCoursesService.fulfilled, (state, action) => {
        state.userCoursesData = action.payload?.data;
        state.userCoursesLoading = false;
      })
      .addCase(getUserCoursesService.rejected, (state, action) => {
        state.userCoursesError = action.payload;
        state.userCoursesLoading = false;
      });
  },
});

export const {} = userCoursesSlice.actions;

export { getUserCoursesService };

export default userCoursesSlice.reducer;
