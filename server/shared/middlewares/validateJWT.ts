import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

interface ICustomRequest extends Request {
  token: JwtPayload;
}
const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["authorization"];

  let jwtPayload;

  try {
    jwtPayload = <any>(
      verify(token?.split(" ")[1], process.env.JWT_SECRET || "", {
        complete: true,
      })
    );

    (req as ICustomRequest).token = jwtPayload;
  } catch (error) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  return next();
};

export default validateJWT;
