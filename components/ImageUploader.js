import Image from "next/image";
import { useRef, useState } from "react";
export default function ImageUploader() {
  const fileInputRef = useRef(null);
  const [filename, setFileName] = useState("");

  function onChooseFile() {
    fileInputRef.current.click();
  }

  function onInputFileClose(e) {}
  return (
    <div className="image-upload-cont">
      <div className="upload-text">Upload your image</div>
      <div className="upload-text-1">File should be Jpeg, Png,...</div>
      <div className="image-drop-cont">
        <Image src="/image.svg" width="150" height="150" alt=".." />
        <div className="upload-text-2">Drag & Drop your image here</div>
      </div>
      <div className="upload-text-3">Or</div>
      <div>
        <div onClick={onChooseFile} className="choose-file-btn">
          {" "}
          Choose a file{" "}
        </div>
        <div>
          <input
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
