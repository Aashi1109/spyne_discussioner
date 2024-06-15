import { model, Schema } from "mongoose";
import { ILog } from "../types";

const logSchema = new Schema<ILog>({
  requestTime: {
    type: Date,
    default: Date.now,
  },
  ip: { type: String },
  path: { type: String },
  service: { type: String },
});

const Log = model("Log", logSchema);

export default Log;
