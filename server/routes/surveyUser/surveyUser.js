const router = require("express").Router();
const Model = require("../../models/Model");
const SurveyUser = require("../../models/SurveyUser");
const verify = require("../verify");

const Joi = require("joi");

router.post("/", async (req, res) => {
  try {
    const model = new SurveyUser(req.body);
    await model.save();
    res.status(200).send({ status: "200", message: "Successfully Created" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

router.get("/", verify, async (req, res) => {
  try {
    const results = await SurveyUser.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req, res) => {
  let updatedModel = req.body;
  try {
    const model = await SurveyUser.findById(req.params.id).exec();
    model.set(updatedModel);
    await model.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    await SurveyUser.findByIdAndDelete(req.params.id);
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

module.exports = router;
