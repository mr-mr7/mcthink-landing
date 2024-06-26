"use client";
import { Api } from "@/api/config";
import httpService from "@/api/httpService";
import { postUplaodService } from "@/store/upload";
import TextOverflow from "@/utility/TextOverFlow";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const Upload = ({ setFieldValue }) => {
  const [file, setFile] = useState(null);
  const { uploadLoading } = useSelector((state) => state.upload);
  const dispatch = useDispatch();
  const refUpload = useRef(null);
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("for", "article");
      dispatch(
        postUplaodService({
          body: formData,
          onsubmit: (pdfId) => {
            setFieldValue("pdf", pdfId);
          },
        })
      );
    }
  }, [file]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileType = selectedFile.type;
    if (fileType === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast.error("فایل با فرمت pdf یا docx آپلود کنید.");
      setFile(null);
    }
  };

  return (
    <div className="upload-btn">
      {uploadLoading ? (
        <button>
          <BeatLoader color="#fff" size={10} />
        </button>
      ) : (
        <button onClick={() => refUpload.current.click()} type="button">
          آپلود فایل
        </button>
      )}
      {file && (
        <span className="uploaded-file">
          <TextOverflow number={10}>{file.name}</TextOverflow>
        </span>
      )}
      <input
        type="file"
        onChange={handleFileChange}
        ref={refUpload}
        style={{ display: "none" }}
      />
    </div>
  );
};
export default Upload;
