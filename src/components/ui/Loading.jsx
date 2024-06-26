"use client";
import { BeatLoader } from "react-spinners";

const styles = {
  display: "flex",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};
const Loading = () => {
  return (
    <div style={styles}>
      <BeatLoader color="#0367a6" />
    </div>
  );
};
export default Loading;
