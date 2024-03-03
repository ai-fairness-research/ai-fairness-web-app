import multer from "multer";
import { Request, Response, NextFunction } from "express";

// SETTING UP FOR IMAGE UPLOADS

const upload = multer({
  limits: {
    fileSize: 10000000, // max file size 10MB = 10000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      cb(new Error("Only upload files with jpg or jpeg or png format."));
    } else {
      cb(null, true); // continue with upload
    }
  },
}).single("image");

export const handleImageUpload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  upload(req, res, (err: any) => {
    if (err instanceof multer.MulterError || err) {
      res.status(500).send({
        status: "500",
        message: "A Multer error occurred when uploading",
      });
    } else if (err) {
      res.status(200).send({
        status: "500",
        message: "An unknown error occurred when uploading",
      });
    } else {
      next();
    }
  });
};
