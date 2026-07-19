import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env";
import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/notFound.middleware";
import { apiRouter } from "./routes";

export const app = express();
app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: env.clientOrigin }));
app.use(express.json({ limit: "1mb" }));
app.use("/api", apiRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
