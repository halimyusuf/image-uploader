import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadingState from "./UploadingState";

const defaultImg = "/image.svg";
export default function ImageUploader() {
  const fileInputRef = useRef(null);
  const [picture, setPicture] = useState({ picturePreview: defaultImg });

  // dropzone
  const onDrop = useCallback((acceptedFiles) => {
    setPicture({
      picture: acceptedFiles.length ? acceptedFiles[0] : "",
      picturePreview: acceptedFiles.length
        ? URL.createObjectURL(acceptedFiles[0])
        : defaultImg,
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/png, image/gif, image/jpeg",
  });

  // console.log(isDragActive, picture);

  function clickInputFile() {
    fileInputRef.current.click();
  }

  function onFileChange(e) {
    const files = e.target.files;
    setPicture({
      picture: files.length ? files[0] : defaultImg,
      picturePreview: files.length ? URL.createObjectURL(files[0]) : defaultImg,
    });
  }

  return (
    <div className="image-upload-cont">
      <UploadingState />
      {/* <div className="upload-text">Upload your image</div>
      <div className="upload-text-1">File should be Jpeg, Png,...</div>
      <div
        className={`image-drop-cont ${isDragActive ? "drag-active" : ""}`}
        {...getRootProps()}
      >
        <Image src={picture.picturePreview} width="200" height="140" alt=".." />
        <div className="upload-text-2">Drag & Drop your image here</div>
      </div>
      <div className="upload-text-3">Or</div>
      <div className="img-upload-action">
        <div onClick={clickInputFile} className="choose-file-btn">
          <div className="choose-file-btn-text">Choose a file</div>
        </div>
        <div>
          <input
            onChange={onFileChange}
            type="file"
            ref={fileInputRef}
            accept="image/png, image/gif, image/jpeg"
          ></input>
        </div>
      </div> */}
    </div>
  );
}
