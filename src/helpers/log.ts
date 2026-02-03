import pino from "pino";
import fs from "fs";

const stream = fs.createWriteStream("./logs/app.log", { flags: "a" });

export const logger = pino(
  {
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  stream
);
