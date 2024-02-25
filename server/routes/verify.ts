import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: { _id: string }; // Define the structure of your user object
    }
  }
}

export default function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ status: 404, message: "Access Denied" });
    return;
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET!) as {
      _id: string;
    }; // Assuming the payload contains _id
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ status: 404, message: "Invalid token" });
  }
}
