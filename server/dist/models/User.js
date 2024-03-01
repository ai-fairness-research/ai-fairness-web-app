"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        minlength: 6,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 6,
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 6,
    },
    uname: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
