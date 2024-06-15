import express from "express";
import setupAuth from "./src/core/auth";
import setupLogging from "./src/core/logging";
import setupProxies from "./src/core/proxy";
import setupRateLimit from "./src/core/ratelimit";

import { asyncHandler, connectDB, errorHandler } from "shared";
import logRequest from "./src/core/request_resolve";
import { ROUTES } from "./src/routes";

const app = express();

setupLogging(app);

app.use(asyncHandler(logRequest));

setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.use(errorHandler);

const PORT = +(process.env.PORT || 5000);
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.listen(PORT, HOSTNAME, async () => {
  await connectDB(process.env.DB_URL || "");
  console.log(`Server listening on port ${PORT}`);
});
