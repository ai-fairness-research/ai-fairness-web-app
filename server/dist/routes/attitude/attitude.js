"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Attitude_1 = __importDefault(require("../../models/Attitude"));
const verify_1 = __importDefault(require("../verify"));
const router = (0, express_1.Router)();
router.post("/", verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const attitude = new Attitude_1.default(req.body);
        yield attitude.save();
        res.status(200).send({ status: "200", message: "Successfully Created" });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield Attitude_1.default.find({}).exec();
        res.status(200).json({ status: "200", message: results });
    }
    catch (error) {
        res.status(500).json({ status: "500", message: "Error" });
    }
}));
router.put("/:id", verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let updatedBias = req.body;
    try {
        const attitude = yield Attitude_1.default.findById(req.params.id).exec();
        if (!attitude) {
            return res
                .status(404)
                .send({ status: "404", message: "Attitude not found" });
        }
        attitude.set(updatedBias);
        yield attitude.save();
        res.status(200).send({ status: "200", message: "Successfully Edited" });
    }
    catch (error) {
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
router.delete("/:id", verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedAttitude = yield Attitude_1.default.findByIdAndDelete(req.params.id);
        if (!deletedAttitude) {
            return res
                .status(404)
                .send({ status: "404", message: "Attitude not found" });
        }
        res.status(200).send({ status: "200", message: "Successfully Deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
exports.default = router;
