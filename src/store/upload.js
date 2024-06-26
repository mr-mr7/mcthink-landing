import { Api, BASE_URL } from "@/api/config";
import httpService from "@/api/httpService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const endpoints = {
  POST_FILE_UPLOAD_POINT: "uploads/file",
};

const initialState = {
  //upload
  uploadData: null,
  uploadLoading: false,
  uploadError: "",
};
const postUplaodService = createAsyncThunk(
  "upload/postData",
  async (
    { body, onsubmit },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      const res = await httpService.post(
        Api.baseUrl + endpoints.POST_FILE_UPLOAD_POINT,
        body,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      if (res.status == 201) {
        onsubmit(res.data?.data[0]?.id);
        toast.success("فایل با موفقیت بارگذاری شد");
        return fulfillWithValue(res.data);
      }
    } catch (error) {
      toast.error("خطایی رخ داده است");
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);

// Define a slice
const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //upload
      .addCase(postUplaodService.pending, (state) => {
        state.uploadLoading = true;
        state.uploadError = null;
      })
      .addCase(postUplaodService.fulfilled, (state, action) => {
        state.uploadData = action.payload.data;
        state.uploadLoading = false;
      })
      .addCase(postUplaodService.rejected, (state, action) => {
        state.uploadError = action.payload;
        state.uploadLoading = false;
      });
  },
});

export const {} = uploadSlice.actions;

export { postUplaodService };

export default uploadSlice.reducer;
