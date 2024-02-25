import { Router, Request, Response } from "express";
import Bias, { IBias } from "../../models/Bias";
import verify from "../verify";

const router = Router();

router.post("/", verify, async (req: Request, res: Response) => {
  try {
    const bias = new Bias(req.body as IBias);
    await bias.save();
    res.status(200).send({ status: "200", message: "Successfully Created" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const results = await Bias.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req: Request, res: Response) => {
  let updatedBias = req.body;
  try {
    const bias = await Bias.findById(req.params.id).exec();
    if (!bias) {
      return res.status(404).send({ status: "404", message: "Bias not found" });
    }
    bias.set(updatedBias);
    await bias.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.delete("/:id", verify, async (req: Request, res: Response) => {
  try {
    const deletedBias = await Bias.findByIdAndDelete(req.params.id);
    if (!deletedBias) {
      return res.status(404).send({ status: "404", message: "Bias not found" });
    }
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

export default router;
