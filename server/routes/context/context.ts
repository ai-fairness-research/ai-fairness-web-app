import { Router, Request, Response } from "express";
import Model, { IModel } from "../../models/Context";
import verify from "../verify";

const router = Router();

router.post("/", verify, async (req: Request, res: Response) => {
  try {
    const model = new Model(req.body as IModel);
    await model.save();
    res.status(200).send({ status: "200", message: "Successfully Created" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const results = await Model.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req: Request, res: Response) => {
  let updatedModel = req.body;
  try {
    const model = await Model.findById(req.params.id).exec();
    if (!model) {
      return res
        .status(404)
        .send({ status: "404", message: "Model not found" });
    }
    model.set(updatedModel);
    await model.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.delete("/:id", verify, async (req: Request, res: Response) => {
  try {
    const deletedModel = await Model.findByIdAndDelete(req.params.id);
    if (!deletedModel) {
      return res
        .status(404)
        .send({ status: "404", message: "Model not found" });
    }
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

export default router;
