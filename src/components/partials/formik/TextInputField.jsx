"use client";
import { useField } from "formik";

const classes = {
  error: {
    textAlign: "right",
    color: "#ec0000",
    height: "28px",
    margin: "0px",
    padding: "2px 0px",
  },
};

const TextInputField = (props) => {
  const { hasError = true, ...rest } = props;
  const [field, { error }, helpers] = useField(props);
  return (
    <div className="w-full">
      <input className="input-auth" {...field} {...rest} />
      {hasError && <p style={classes.error}>{error}</p>}
    </div>
  );
};
export default TextInputField;
