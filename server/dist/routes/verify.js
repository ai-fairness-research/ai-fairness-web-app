"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(req, res, next) {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).json({ status: 404, message: "Access Denied" });
        return;
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET); // Assuming the payload contains _id
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(401).json({ status: 404, message: "Invalid token" });
    }
}
exports.default = default_1;
