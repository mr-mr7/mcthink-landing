"use client";

import { Api } from "@/api/config";
import httpService from "@/api/httpService";
import TextInputField from "@/components/partials/formik/TextInputField";
import { postArticleService } from "@/store/articles";
import Upload from "@/structure/organism/Upload";
import { Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const Articles = () => {
  const { postArticleLoading, uploadLoading } = useSelector((state) => ({
    ...state.articles,
    ...state.upload,
  }));
  const initialData = {
    title: "",
    pdf: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (data, { setErrors }) => {
    const items = {
      title: data?.title,
      pdf: data?.pdf,
    };
    dispatch(
      postArticleService({
        body: items,
        setErrors,
      })
    );
  };
  return (
    <>
      <Formik
        enableReinitialize
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialData}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-sm-6">
                <TextInputField
                  name="title"
                  label={"عنوان"}
                  type="text"
                  placeholder={"عنوان"}
                />
              </div>
              <div className="col-sm-3">
                <Upload setFieldValue={setFieldValue} />
              </div>
              <div className="col-sm-3">
                {postArticleLoading ? (
                  <button className="btn-auth">
                    {<BeatLoader color="#fff" />}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-auth"
                    disabled={uploadLoading}
                  >
                    ثبت
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Articles;
