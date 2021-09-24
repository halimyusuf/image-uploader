// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fileUpload from "express-fileupload";
import nc from "next-connect";
import cloudinary from "cloudinary";
import { cloudinaryUrl } from "../../utils/getEnv";

cloudinary.config(cloudinaryUrl);
const app = nc();
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.post(async (req, res) => {
  const file = req.files.file;
  function uploader() {
    return new Promise(function (resolve, reject) {
      cloudinary.v2.uploader.upload(file.tempFilePath, function (err, result) {
        if (err) {
          console.log(err);
        }
        resolve(result);
      });
    });
  }
  try {
    const data = await uploader();
    return res.status(200).json({ url: data.secure_url });
  } catch (error) {
    return res.status(400).json({ error: "Bad request" });
  }
});

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
