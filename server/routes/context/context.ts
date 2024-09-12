import { Router, Request, Response } from "express";
import Model, { IModel } from "../../models/Context";
import verify from "../verify";
import { handleImageUpload } from "../../middlewares/handleImageUpload";

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
    const results = await Model.find({}).select({
      context: 1,
      problem: 1,
      options: 1,
      title: 1,
      reasoning: 1,
      date: 1,
      __v: 1,
    });
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.get("/randomize/:n", async (req: Request, res: Response) => {
  try {
    const results = await Model.find({}).select({
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
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.get("/image/:id", async (req, res) => {
  try {
    const result = await Model.findById(req.params.id);
    res.set("Content-Type", "image/jpeg");
    if (!result) {
      return res
        .status(404)
        .send({ status: "404", message: "Image not found" });
    }
    res.status(200).send(result.image);
  } catch (error) {
    res.status(200).send({ status: "400", message: error });
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

router.put(
  "/image/:id",
  handleImageUpload,
  verify,
  async (req: Request, res: Response) => {
    try {
      // console.log(req.file);
      let updatedContext = req.body;
      if (req.file) updatedContext.image = req.file.buffer;
      let model = await Model.findById(req.params.id).exec();
      if (!model) {
        return res
          .status(404)
          .send({ status: "404", message: "Context not found" });
      }
      model.set(updatedContext);
      await model.save();
      res.status(200).send({ status: "200", message: "Successfully Edited" });
    } catch (error) {
      res.status(400).send({ status: "400", message: "Internal Server Error" });
    }
  }
);

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
