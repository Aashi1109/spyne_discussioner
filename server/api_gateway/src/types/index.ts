import { ROUTES } from "../routes";

export type IRoutes = typeof ROUTES;

export interface ILog {
  requestTime: Date;
  path: string;
  service: string;
  ip: string;
}
