"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ModelSchema = new mongoose_1.Schema({
    image: {
        type: Buffer,
    },
    context: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    problem: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
    },
    reasoning: {
        type: [String],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Model = (0, mongoose_1.model)("Model", ModelSchema);
exports.default = Model;
