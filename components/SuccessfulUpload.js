import Image from "next/image";
import { useState } from "react";
export default function SuccessfulUpload({ url }) {
  const [text, setText] = useState("Copy Link");
  url = url ? url : "/image.svg";
  function onCopy() {
    navigator.clipboard.writeText(url);
    console.log("nsnns");
    setText("Copied!");
  }
  return (
    <div>
      <div className="success-icon d-flex-c">
        <Image src="/success.png" height="35" width="35" alt="success" />
      </div>
      <div className="successful-upload-text">Uploaded Successfully!</div>
      <div className="image-display">
        <Image
          src={url}
          width="700"
          height="350"
          layout="responsive"
          alt="..."
        />
      </div>
      <div className="image-link-cont">
        <div className="copy-link-btn" onClick={onCopy}>
          <div className="copy-link-text">{text}</div>
        </div>
        <div className="image-link">{url}</div>
      </div>
    </div>
  );
}
