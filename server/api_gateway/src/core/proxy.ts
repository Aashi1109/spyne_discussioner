import { Express } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { asyncHandler } from "shared";
import { IRoutes } from "../types";

const setupProxies = (app: Express, routes: IRoutes) => {
  routes.forEach((r) => {
    app.use(r.url, asyncHandler(createProxyMiddleware(r.proxy as any)));
  });
};

export default setupProxies;
