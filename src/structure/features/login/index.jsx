"use client";
import TextInputField from "@/components/partials/formik/TextInputField";
import Loading from "@/components/ui/Loading";
import Redirecting from "@/components/ui/Redirecting";
import { postLoginService } from "@/store/auth";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const currectMobileNumber = (num) => {
  if (num.length == 11 && num.startsWith("0")) {
    return num.slice(1);
  }
  return num;
};
const Login = () => {
  const initialData = {
    password: "",
    mobile: "",
  };
  const dispatch = useDispatch();
  const {
    loginLoading,
    checkLoginLoading,
    checkLoginData: isLogin,
  } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLogin) {
      window.location = "/";
    }
  }, [isLogin]);
  const handleSubmit = (data, { setErrors }) => {
    const items = {
      password: data?.password,
      mobile: currectMobileNumber(data?.mobile),
    };
    dispatch(postLoginService({ body: items, setErrors }));
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
                  <div className="container--signin">
                    <Formik
                      enableReinitialize
                      validateOnBlur={false}
                      validateOnChange={false}
                      initialValues={initialData}
                      onSubmit={handleSubmit}
                    >
                      {() => (
                        <Form className="form">
                          <h2 className="form__title">ورود به سایت</h2>
                          <TextInputField
                            name="mobile"
                            label={"موبایل"}
                            type="text"
                            placeholder={"موبایل"} 
                          />
                          <TextInputField
                            name="password"
                            label={"رمز عبور"}
                            type="password"
                            placeholder={"رمز عبور"}
                          />
                          <div style={{marginBottom:'10px'}}>
                            <span> قبلا ثبت نام نکرده اید ؟ </span>
                            <Link href={'/register'}>ثبت نام</Link>
                          </div>
                          {loginLoading ? (
                            <button className="btn-auth">
                              <BeatLoader color="#fff" />
                            </button>
                          ) : (
                            <button type="submit" className="btn-auth">
                              ورود
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
export default Login;