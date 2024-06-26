"use client";
import { BeatLoader } from "react-spinners";

const styles = {
  display: "flex",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
};
const Redirecting = () => {
  return (
    <div style={styles}>
      <h3 style={{ color: "#0367a6" }}>در حال انتقال به صفحه ی اصلی </h3>
      <BeatLoader color="#0367a6" size={12} />
    </div>
  );
};
export default Redirecting;
