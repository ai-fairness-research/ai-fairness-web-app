"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SurveyUserSchema = new mongoose_1.Schema({
    email: { type: String },
    isInterested: { type: String },
    birthYear: { type: String },
    gender: { type: String },
    country: { type: String },
    educationYears: { type: String },
    areaDesc: { type: String },
    incomeDesc: { type: String },
    isReligion: { type: String },
    religion: { type: String },
    isMinority: { type: String },
    minority: { type: [String] },
    isDiscriminated: { type: String },
    bias: { type: [String] },
    answers: { type: [Object] },
    attitude: { type: [String] },
    uniqueId: { type: [String] },
    date: { type: Date, default: Date.now },
});
const SurveyUser = (0, mongoose_1.model)("SurveyUser", SurveyUserSchema);
exports.default = SurveyUser;
