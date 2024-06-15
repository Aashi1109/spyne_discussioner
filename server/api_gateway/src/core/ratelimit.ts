import { Express } from "express";
import rateLimit from "express-rate-limit";
import { IRoutes } from "../types";

const setupRateLimit = (app: Express, routes: IRoutes) => {
  routes.forEach((r) => {
    if (r.rateLimit) {
      app.use(r.url, rateLimit(r.rateLimit));
    }
  });
};

export default setupRateLimit;
