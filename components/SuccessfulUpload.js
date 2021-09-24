import Image from "next/image";
export default function SuccessfulUpload() {
  return (
    <div>
      <div className="success-icon d-flex-c">
        <Image src="/success.png" height="35" width="35" alt="success" />
      </div>
      <div className="successful-upload-text">Uploaded Successfully!</div>
      <div className="image-display">
        <Image
          src="/image.svg"
          width="700"
          height="300"
          layout="responsive"
          alt="..."
        />
      </div>
      <div className="image-link-cont">
        <div className="image-link">
          https://images.yourdomain.com/photo-1496950866446-325...
        </div>
        <div className="copy-link-btn">
          <div className="copy-link-text">Copy Link</div>
        </div>
      </div>
    </div>
  );
}
