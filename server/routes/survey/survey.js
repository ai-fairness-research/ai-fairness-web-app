const router = require("express").Router();
const Bias = require("../../models/Bias");
const verify = require("../verify");

const Joi = require("joi");

router.post("/", verify, async (req, res) => {
  try {
    const bias = new Bias(req.body);
    await bias.save();
    res.status(200).send({ status: "200", message: "Successfully Created" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const results = await Bias.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req, res) => {
  let updatedBias = req.body;
  try {
    const bias = await Bias.findById(req.params.id).exec();
    bias.set(updatedBias);
    await bias.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    await Bias.findByIdAndDelete(req.params.id);
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Servor Error" });
  }
});

module.exports = router;
