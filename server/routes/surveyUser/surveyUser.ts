import { Router, Request, Response } from "express";
import SurveyUser, { ISurveyUser } from "../../models/SurveyUser";
import verify from "../verify";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const user = new SurveyUser(req.body as ISurveyUser);
  await user.save();
  res.status(200).send({ status: "200", message: "Successfully Created" });
  try {
  } catch (error) {
    console.log(error);
    res.status(200).send({ status: "400", message: "Internal Server Error" });
  }
});

router.get("/", verify, async (req: Request, res: Response) => {
  try {
    const results = await SurveyUser.find({}).exec();
    res.status(200).json({ status: "200", message: results });
  } catch (error) {
    res.status(500).json({ status: "500", message: "Error" });
  }
});

router.put("/:id", verify, async (req: Request, res: Response) => {
  let updatedModel = req.body;
  try {
    const user = await SurveyUser.findById(req.params.id).exec();
    if (!user) {
      return res.status(404).send({ status: "404", message: "User not found" });
    }
    user.set(updatedModel);
    await user.save();
    res.status(200).send({ status: "200", message: "Successfully Edited" });
  } catch (error) {
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

router.delete("/:id", verify, async (req: Request, res: Response) => {
  try {
    const deletedUser = await SurveyUser.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send({ status: "404", message: "User not found" });
    }
    res.status(200).send({ status: "200", message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400", message: "Internal Server Error" });
  }
});

export default router;
