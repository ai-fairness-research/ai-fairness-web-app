import { Router, Request, Response } from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { slugify } from "../../helpers/helperFunc";
import randomstring from "randomstring";
import Joi from "joi";

const router = Router();

//REGISTER SCHEMA
const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    //CHECK IF MAIL ALREADY EXISTS
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res
        .status(400)
        .json({ status: 400, message: "Email Already Exists" });
    }

    //HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const uname = `${slugify(req.body.name)}--${randomstring.generate(7)}`;

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      uname: uname,
      password: hashedPassword,
    });

    //VALIDATION OF USER INPUTS
    await registerSchema.validateAsync(req.body);

    //THE USER IS ADDED
    await user.save();

    //CREATE TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET!, {
      expiresIn: "6h", // expires in 6 hours
    });

    res.status(200).header("auth-token", token).json({
      status: "200",
      token: token,
      userId: user._id,
      name: user.name,
      uname: user.uname,
    });
  } catch (error: any) {
    if (error.details) {
      return res
        .status(400)
        .json({ status: "500", message: error.details[0]?.message });
    } else {
      return res.status(500).json({ status: "500", message: error });
    }
  }
});

//LOGIN SCHEMA
const loginSchema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

//SIGNIN USER
router.post("/signin", async (req: Request, res: Response) => {
  try {
    //CHECKING IF EMAIL EXISTS
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "400", message: 'Email doesn"t exist' });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res
        .status(400)
        .json({ status: "400", message: "Incorrect Password !!!" });
    }

    //VALIDATION OF USER INPUTS
    await loginSchema.validateAsync(req.body);

    //CREATE TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET!, {
      expiresIn: "6h", // expires in 6 hours
    });

    res.status(200).header("auth-token", token).json({
      status: "200",
      token: token,
      userId: user._id,
      name: user.name,
      uname: user.uname,
    });
  } catch (error: any) {
    if (error.details) {
      return res
        .status(400)
        .json({ status: "400", message: error.details[0]?.message });
    } else {
      return res.status(500).json({ status: "400", message: error });
    }
  }
});

router.post("/isvalid", async (req: Request, res: Response) => {
  try {
    const token = req.body.token;
    if (!token) {
      return res
        .status(401)
        .json({ status: 401, isValid: false, message: "Access Denied" });
    }
    const dateNow = new Date();
    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as JwtPayload;

    if (typeof decodedToken === "string") {
      // Handle case when token is a string
      return res
        .status(401)
        .json({ status: 401, isValid: false, message: "token expired" });
    } else {
      // Handle case when token is JwtPayload
      if (decodedToken.exp && decodedToken.exp > dateNow.getTime() / 1000) {
        return res
          .status(200)
          .json({ status: 200, isValid: true, message: "token valid" });
      } else {
        return res
          .status(401)
          .json({ status: 401, isValid: false, message: "token expired" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: "500", isValid: false, message: error });
  }
});

export default router;
