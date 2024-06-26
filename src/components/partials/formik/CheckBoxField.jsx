"use client";
import { useField } from "formik";

const styles = {
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    gap:'12px',
    marginBottom:'8px',
    padding:'6px'
  },
  label: {
    margin: "0px",
  },
  input:{
    margin:'0px',
    cursor:'pointer'
  }
};
const CheckboxField = (props) => {
  const { name, type = "checkbox", label, ...rest } = props;
  const [field] = useField({ name, type });

  return (
    <div style={styles.checkBoxContainer}>
      <p  style={styles.label}>{label}</p>
      <input name={name} type="checkbox" style={styles.input} {...field} {...rest} />
    </div>
  );
};
export default CheckboxField;
