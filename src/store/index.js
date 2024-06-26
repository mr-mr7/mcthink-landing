import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import userCourses from "./userCourses";
import upload from "./upload";
import articles from "./articles";
import comments from "./commnts";
import course from "./course";
const store = configureStore({
  reducer: {
    auth,
    userCourses,
    upload,
    articles,
    comments,
    course,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
