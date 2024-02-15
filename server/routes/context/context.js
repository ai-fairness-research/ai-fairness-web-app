const router = require("express").Router();
const Model = require("../../models/Model");
const verify = require("../verify");

const Joi = require("joi");

router.post("/", verify, async (req, res) => {
  try {
    const model = new Model(req.body);
    await model.save();
    res.status(200).send({ status: "200", message: "Successfully Created" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const results = await Model.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req, res) => {
  let updatedModel = req.body;
  try {
    const model = await Model.findById(req.params.id).exec();
    model.set(updatedModel);
    await model.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

module.exports = router;
