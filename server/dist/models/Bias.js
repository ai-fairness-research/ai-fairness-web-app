"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BiasSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Bias = (0, mongoose_1.model)("Bias", BiasSchema);
exports.default = Bias;
