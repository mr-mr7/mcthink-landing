"use client";
import { useSelector, useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { postChangePasswordService } from "@/store/auth";
import TextInputField from "@/components/partials/formik/TextInputField";
import { BeatLoader } from "react-spinners";

const ChangePasswordForm = () => {
  const initialData = {
    password: "",
    new_password: "",
    password_confirmation: "",
  };
  const dispatch = useDispatch();
  const { changePassLoading } = useSelector((state) => state.auth);
  const handleSubmit = (data, { setErrors }) => {
    const items = {
      password: data?.password,
      new_password: data?.new_password,
      password_confirmation: data?.password_confirmation,
    };
    dispatch(postChangePasswordService({ body: items, setErrors }));
  };
  return (
    <Formik
      enableReinitialize
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialData}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form
          style={{
            width: "50%",
            margin: "0 auto",
          }}
        >
          <TextInputField
            name="password"
            label={"رمز"}
            type="text"
            placeholder={"رمز"}
          />
          <TextInputField
            name="new_password"
            label={"رمز جدید"}
            type="text"
            placeholder={"رمز جدید"}
          />
          <TextInputField
            name="password_confirmation"
            label={"تکرار رمز جدید"}
            type="text"
            placeholder={"تکرار رمز جدید"}
          />
          {changePassLoading ? (
            <button className="btn-auth">{<BeatLoader color="#fff" />}</button>
          ) : (
            <button type="submit" className="btn-auth">
              تایید
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
