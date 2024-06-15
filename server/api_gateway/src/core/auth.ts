import { Express } from "express";
import { asyncHandler, validateJWT } from "shared";
import { IRoutes } from "../types";

const setupAuth = (app: Express, routes: IRoutes) => {
  routes.forEach((r) => {
    if (r.auth) {
      app.use(
        r.url,
        validateJWT,
        asyncHandler(async function (req, res, next) {
          next();
        })
      );
    }
  });
};

export default setupAuth;
