"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AttitudeSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Attitude = (0, mongoose_1.model)("Attitude", AttitudeSchema);
exports.default = Attitude;
