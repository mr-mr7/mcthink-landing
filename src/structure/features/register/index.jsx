"use client";
import CheckboxField from "@/components/partials/formik/CheckBoxField";
import TextInputField from "@/components/partials/formik/TextInputField";
import Loading from "@/components/ui/Loading";
import Redirecting from "@/components/ui/Redirecting";
import { useTimer } from "@/hooks/useTimer";
import {
  postLoginService,
  postRegisterService,
  postSendOtpService,
} from "@/store/auth";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const currectMobileNumber = (num) => {
  if (num.length == 11 && num.startsWith("0")) {
    return num.slice(1);
  }
  return num;
};
const generateTime = (time) => {
  if (!!!time) return "01:59";
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};
const Register = () => {
  const initialData = {
    otp: "",
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    student: 0,
    student_card: "",
    field_study: "",
    password: "",
    password_confirmation: "",
  };
  const [sentOtp, setSentOtp] = useState(false);

  const dispatch = useDispatch();
  const {
    registerLoading,
    checkLoginLoading,
    sendOtpData,
    sendOtpLoading,
    checkLoginData: isLogin,
  } = useSelector((state) => state.auth);
  const [timer, show, setShow] = useTimer(generateTime(sendOtpData?.time));

  useEffect(() => {
    console.log(isLogin, "islogin");
    if (isLogin) {
      window.location = "/";
    }
  }, [isLogin]);
  const handleSubmit = (data, { setErrors }) => {
    const items = {
      otp: Number(data?.otp),
      mobile: currectMobileNumber(data?.mobile),
      name: data?.name,
      lastname: data.lastname,
      email: data.email,
      student: data.student,
      student_card: data.student_card,
      field_study: data.field_study,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };
    dispatch(
      postRegisterService({
        body: items,
        setErrors,
        setSentOtp,
      })
    );
  };
  return (
    <>
      {checkLoginLoading ? (
        <Loading />
      ) : (
        <>
          {isLogin == null ? (
            <></>
          ) : (
            <>
              {!isLogin ? (
                <div className="container-auth">
                  <div className="container--signup">
                    <Formik
                      enableReinitialize
                      validateOnBlur={false}
                      validateOnChange={false}
                      initialValues={initialData}
                      onSubmit={handleSubmit}
                    >
                      {({ values, setFieldValue }) => (
                        <Form className="form">
                          <h2 className="form__title">ثبت نام در سایت</h2>
                          <div className="row w-full">
                            <div className="col-sm-6 col-12">
                              <TextInputField
                                type="text"
                                placeholder="نام"
                                name="name"
                              />
                            </div>
                            <div className="col-sm-6">
                              <TextInputField
                                type="text"
                                placeholder="نام خانوادگی"
                                name="lastname"
                              />
                            </div>
                          </div>
                          <div className="row w-full">
                            <div className="col-sm-6 col-12">
                              <TextInputField
                                type="email"
                                placeholder="ایمیل"
                                name="email"
                              />
                            </div>
                            <div className="col-sm-6 col-12">
                              <TextInputField
                                type="number"
                                placeholder="موبایل"
                                name="mobile"
                              />
                            </div>
                          </div>
                          <CheckboxField
                            label={"آیا دانشجو هستید ؟"}
                            value={values["student"] == 1 ? true : false}
                            name="student"
                            onChange={(e) => {
                              if (e.target.checked) setFieldValue("student", 1);
                              else setFieldValue("student", 0);
                            }}
                          />
                          {values["student"] == 1 && (
                            <>
                              <div className="row w-full">
                                <div className="col-sm-6 col-12">
                                  <TextInputField
                                    type="email"
                                    placeholder="شماره دانشجویی"
                                    name="student_card"
                                  />
                                </div>
                                <div className="col-sm-6 col-12">
                                  <TextInputField
                                    type="email"
                                    placeholder="رشته ی تحصیلی"
                                    name="field_study"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          <div className="row w-full">
                            <div className="col-sm-6 col-12">
                              <TextInputField
                                type="password"
                                placeholder="رمز عبور"
                                name="password"
                              />
                            </div>
                            <div className="col-sm-6 col-12">
                              <TextInputField
                                type="password"
                                placeholder="تکرار رمز  عبور"
                                name="password_confirmation"
                              />
                            </div>
                          </div>

                          <div className="row w-full">
                            <div className="col-sm-6 col-12">
                              <TextInputField
                                name="otp"
                                type="text"
                                placeholder={"کد تایید"}
                                hasError={false}
                              />
                            </div>
                            <div className="col-sm-6 col-12">
                              {!sentOtp ? (
                                <button
                                  className="btn-auth"
                                  type="button"
                                  onClick={() => {
                                    dispatch(
                                      postSendOtpService({
                                        mobile: currectMobileNumber(
                                          values["mobile"]
                                        ),
                                        setSentOtp,
                                        setShow,
                                      })
                                    );
                                  }}
                                >
                                  {sendOtpLoading ? (
                                    <BeatLoader color="#fff" size={12} />
                                  ) : (
                                    "کد تایید"
                                  )}
                                </button>
                              ) : (
                                <button
                                  className="btn-auth"
                                  type="button"
                                  onClick={() => {
                                    if (!show) {
                                      dispatch(
                                        postSendOtpService({
                                          mobile: currectMobileNumber(
                                            values["mobile"]
                                          ),
                                          setSentOtp,
                                          setShow,
                                        })
                                      );
                                    }
                                  }}
                                >
                                  {show
                                    ? timer
                                      ? timer
                                      : "..."
                                    : "دریافت مجدد کد تایید "}
                                </button>
                              )}
                            </div>
                          </div>
                          <div style={{ margin: "12px 0px" }}>
                            <span> قبلا ثبت نام کرده اید ؟ </span>
                            <Link href={"/login"}>ورود</Link>
                          </div>
                          {registerLoading ? (
                            <button className="btn-auth">
                              {<BeatLoader color="#fff" />}
                            </button>
                          ) : (
                            <button type="submit" className="btn-auth">
                              ثبت نام
                            </button>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              ) : (
                <Redirecting />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Register;
