import { Router } from "express";
import { env } from "../config/env";
import type { ApiSuccess } from "../types/api";

interface HealthData {
  environment: string;
  status: "ok";
}
export const healthRouter = Router();
healthRouter.get("/health", (_request, response) => {
  const payload: ApiSuccess<HealthData> = {
    success: true,
    data: { environment: env.nodeEnv, status: "ok" },
  };
  response.status(200).json(payload);
});
