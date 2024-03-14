import { Router, Request, Response } from "express";
import Attitude, { IAttitude } from "../../models/Attitude";
import verify from "../verify";

const router = Router();

router.post("/", verify, async (req: Request, res: Response) => {
  try {
    const attitude = new Attitude(req.body as IAttitude);
    await attitude.save();
    res.status(200).send({ status: "200", message: "Successfully Created" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const results = await Attitude.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req: Request, res: Response) => {
  let updatedBias = req.body;
  try {
    const attitude = await Attitude.findById(req.params.id).exec();
    if (!attitude) {
      return res
        .status(404)
        .send({ status: "404", message: "Attitude not found" });
    }
    attitude.set(updatedBias);
    await attitude.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.delete("/:id", verify, async (req: Request, res: Response) => {
  try {
    const deletedAttitude = await Attitude.findByIdAndDelete(req.params.id);
    if (!deletedAttitude) {
      return res
        .status(404)
        .send({ status: "404", message: "Attitude not found" });
    }
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

export default router;
