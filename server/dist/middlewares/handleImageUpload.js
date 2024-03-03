"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleImageUpload = void 0;
const multer_1 = __importDefault(require("multer"));
// SETTING UP FOR IMAGE UPLOADS
const upload = (0, multer_1.default)({
    limits: {
        fileSize: 10000000, // max file size 10MB = 10000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            cb(new Error("Only upload files with jpg or jpeg or png format."));
        }
        else {
            cb(null, true); // continue with upload
        }
    },
}).single("image");
const handleImageUpload = (req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof multer_1.default.MulterError || err) {
            res.status(500).send({
                status: "500",
                message: "A Multer error occurred when uploading",
            });
        }
        else if (err) {
            res.status(200).send({
                status: "500",
                message: "An unknown error occurred when uploading",
            });
        }
        else {
            next();
        }
    });
};
exports.handleImageUpload = handleImageUpload;
