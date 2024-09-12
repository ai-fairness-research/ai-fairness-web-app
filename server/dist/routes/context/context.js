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
const Context_1 = __importDefault(require("../../models/Context"));
const verify_1 = __importDefault(require("../verify"));
const handleImageUpload_1 = require("../../middlewares/handleImageUpload");
const router = (0, express_1.Router)();
router.post("/", verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const model = new Context_1.default(req.body);
        yield model.save();
        res.status(200).send({ status: "200", message: "Successfully Created" });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield Context_1.default.find({}).select({
            context: 1,
            problem: 1,
            options: 1,
            title: 1,
            reasoning: 1,
            date: 1,
            __v: 1,
        });
        res.status(200).json({ status: "200", message: results });
    }
    catch (error) {
        res.status(500).json({ status: "500", message: "Error" });
    }
}));
router.get("/randomize/:n", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield Context_1.default.find({}).select({
            context: 1,
            problem: 1,
            title: 1,
            options: 1,
            reasoning: 1,
            date: 1,
            __v: 1,
        });
        // Shuffle the array
        const shuffledResults = results.sort(() => Math.random() - 0.5);
        // Select the first 'n' elements
        const randomResults = shuffledResults.slice(0, parseInt(req.params.n));
        res.status(200).json({ status: "200", message: randomResults });
    }
    catch (error) {
        res.status(500).json({ status: "500", message: "Error" });
    }
}));
router.get("/image/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Context_1.default.findById(req.params.id);
        res.set("Content-Type", "image/jpeg");
        if (!result) {
            return res
                .status(404)
                .send({ status: "404", message: "Image not found" });
        }
        res.status(200).send(result.image);
    }
    catch (error) {
        res.status(200).send({ status: "400", message: error });
    }
}));
router.put("/:id", verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let updatedModel = req.body;
    try {
        const model = yield Context_1.default.findById(req.params.id).exec();
        if (!model) {
            return res
                .status(404)
                .send({ status: "404", message: "Model not found" });
        }
        model.set(updatedModel);
        yield model.save();
        res.status(200).send({ status: "200", message: "Successfully Edited" });
    }
    catch (error) {
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
router.put("/image/:id", handleImageUpload_1.handleImageUpload, verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.file);
        let updatedContext = req.body;
        if (req.file)
            updatedContext.image = req.file.buffer;
        let model = yield Context_1.default.findById(req.params.id).exec();
        if (!model) {
            return res
                .status(404)
                .send({ status: "404", message: "Context not found" });
        }
        model.set(updatedContext);
        yield model.save();
        res.status(200).send({ status: "200", message: "Successfully Edited" });
    }
    catch (error) {
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
router.delete("/:id", verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedModel = yield Context_1.default.findByIdAndDelete(req.params.id);
        if (!deletedModel) {
            return res
                .status(404)
                .send({ status: "404", message: "Model not found" });
        }
        res.status(200).send({ status: "200", message: "Successfully Deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
}));
exports.default = router;
