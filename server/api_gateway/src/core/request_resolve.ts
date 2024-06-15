import { NextFunction, Request, Response } from "express";
import { jnstringify, logger } from "shared";
import Log from "../models";

export function grabRequest(req: Request) {
  const ipAddress =
    ((req.headers["x-forwarded-for"] || "") as string)?.split(",").pop() ||
    req.socket.remoteAddress;
  const apiSignatureKey = req.headers["basic_auth"] || "";
  return {
    ip_address: ipAddress,
    basic_auth: apiSignatureKey,
    host: req.headers["host"],
    user_agent: req.headers["user-agent"] || "",
    method: req.method,
    path: req.path,
    originalUrl: req.originalUrl,
    query: req.query,
    params: req.params,
    app_id: req.headers["app_id"],
    body: req.body,
    authorization: req.headers["Authorization"] || "",
  };
}

const logRequest = async (req: Request, res: Response, next: NextFunction) => {
  const request = grabRequest(req);

  logger.info(`Request grabbed successfully ${jnstringify(request)}`);

  // save request to db
  const newLog = new Log({
    ip: request.ip_address,
    path: request.originalUrl,
    service: request.path,
  });
  await newLog.save();
  logger.info(`Log saved successfully`);

  return next();
};

export default logRequest;
