import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageUploader() {
  const fileInputRef = useRef(null);
  const [filename, setFileName] = useState("");
  const [picture, setPicture] = useState({});

  function clickInputFile() {
    fileInputRef.current.click();
  }

  const defaultImg = "/image.svg";

  function onFileChange(e) {
    const files = e.target.files;
    setPicture({
      picture: files.length ? files[0] : defaultImg,
      picturePreview: files.length
        ? URL.createObjectURL(e.target.files[0])
        : defaultImg,
    });
  }

  function onInputFileClose(e) {}

  return (
    <div className="image-upload-cont">
      <div className="upload-text">Upload your image</div>
      <div className="upload-text-1">File should be Jpeg, Png,...</div>
      <div className="image-drop-cont">
        <Image
          src={`${
            picture.picturePreview ? picture.picturePreview : defaultImg
          }`}
          width="200"
          height="140"
          alt=".."
        />
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
            title="Choose a file"
            className="choose-file-btn-text"
          ></input>
        </div>
      </div>
    </div>
  );
}
