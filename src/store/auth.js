import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import httpService from "@/api/httpService";
import { Api } from "@/api/config";
const cookies = new Cookies();

const endpoints = {
  POST_REGISTER_POINT: "register",
  POST_LOGIN_POINT: "login",
  POST_SEND_OTP_POINT: "send-otp",
  CHECK_LOGIN_POINT: "check-login",
  POST_CHANGE_PASSWORD_POINT: "change-password",
};

const initialState = {
  /*login*/
  loginData: null,
  loginLoading: false,
  loginError: "",
  /*register*/
  registerData: null,
  registerLoading: false,
  registerError: "",
  /*send otp*/
  sendOtpData: null,
  sendOtpLoading: false,
  sendOtpError: "",
  // /*check login*/
  checkLoginData: null,
  checkLoginLoading: false,
  checkLoginError: "",
  /*change pass*/
  changePassLoading: false,
  changePassData: null,
  changePassError: "",
};

const postLoginService = createAsyncThunk(
  "auth/postLogin",
  async ({ body, setErrors }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.post(
        Api.baseAuthUrl + endpoints.POST_LOGIN_POINT,
        body
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
const postRegisterService = createAsyncThunk(
  "auth/postRegister",
  async (
    { body, setErrors, setSentOtp },
    { rejectWithValue, fulfillWithValue, getState }
  ) => {
    try {
      const res = await httpService.post(
        Api.baseAuthUrl + endpoints.POST_REGISTER_POINT,
        body
      );
      if (res.status == 200) {
        setSentOtp(false);
        toast.success("ثبت نام با موفقیت انجام شد");
        return fulfillWithValue(res.data);
      }
    } catch (err) {
      setErrors({
        ...httpService.setErrors(),
        city: httpService.setErrors()["city_id"],
      });
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);
const postSendOtpService = createAsyncThunk(
  "auth/postSendOtp",
  async (
    { mobile, setSentOtp, setShow },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const res = await httpService.post(
        Api.baseAuthUrl + endpoints.POST_SEND_OTP_POINT,
        {
          mobile,
        }
      );
      if (res?.status == 200 || res?.status == 202) {
        setSentOtp(true);
        setShow(true);
        toast.success(res?.data?.message);
        return fulfillWithValue(res.data);
      }
    } catch (err) {
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);
const checkLoginService = createAsyncThunk(
  "auth/checkLogin",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.post(
        Api.baseAuthUrl + endpoints.CHECK_LOGIN_POINT
      );
      if (res.status == 200) {
        return fulfillWithValue(res.data);
      }
    } catch (error) {
      return rejectWithValue("خطایی رخ داده است");
    }
  }
);
const postChangePasswordService = createAsyncThunk(
  "auth/postChangePassword",
  async ({ body, setErrors }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await httpService.post(
        Api.baseAuthUrl + endpoints.POST_CHANGE_PASSWORD_POINT,
        body
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction: () => {
      cookies.remove("user");
      cookies.remove("token");
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(postLoginService.pending, (state, action) => {
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(postLoginService.fulfilled, (state, action) => {
        state.loginData = action.payload?.data;
        state.loginLoading = false;
        cookies.set("token", action.payload?.data?.token, {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });
        cookies.set("user", action.payload?.data?.user, {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });
        window.location = "/";
      })
      .addCase(postLoginService.rejected, (state, action) => {
        state.loginError = action.payload;
        state.loginLoading = false;
      })
      //register
      .addCase(postRegisterService.pending, (state, action) => {
        state.registerLoading = true;
        state.registerError = null;
      })
      .addCase(postRegisterService.fulfilled, (state, action) => {
        state.registerData = action.payload.data;
        state.registerLoading = false;
      })
      .addCase(postRegisterService.rejected, (state, action) => {
        state.registerError = action.payload;
        state.registerLoading = false;
      })
      //send otp
      .addCase(postSendOtpService.pending, (state, action) => {
        state.sendOtpLoading = true;
        state.sendOtpError = null;
      })
      .addCase(postSendOtpService.fulfilled, (state, action) => {
        state.sendOtpData = action.payload?.data;
        state.sendOtpLoading = false;
      })
      .addCase(postSendOtpService.rejected, (state, action) => {
        state.sendOtpError = action.payload;
        state.sendOtpLoading = false;
      })
      //check-login
      .addCase(checkLoginService.pending, (state, action) => {
        state.checkLoginLoading = true;
        state.checkLoginError = null;
      })
      .addCase(checkLoginService.fulfilled, (state, action) => {
        state.checkLoginData = action.payload?.data?.is_login;
        state.checkLoginLoading = false;
      })
      .addCase(checkLoginService.rejected, (state, action) => {
        state.checkLoginError = action.payload;
        state.checkLoginLoading = false;
      })
      //change pass
      .addCase(postChangePasswordService.pending, (state, action) => {
        state.changePassLoading = true;
        state.changePassError = null;
      })
      .addCase(postChangePasswordService.fulfilled, (state, action) => {
        state.changePassData = action.payload;
        state.changePassLoading = false;
        // cookies.remove("token");
        // cookies.remove("user");
        // window.location = "/login";
      })
      .addCase(postChangePasswordService.rejected, (state, action) => {
        state.changePassError = action.payload;
        state.changePassLoading = false;
      });
  },
});

export const { logoutAction } = authSlice.actions;

export {
  postLoginService,
  postRegisterService,
  postSendOtpService,
  checkLoginService,
  postChangePasswordService,
};

export default authSlice.reducer;
