import type { ErrorRequestHandler } from "express";
import { env } from "../config/env";
import type { ApiErrorResponse } from "../types/api";
import { ApiError } from "../utils/ApiError";

export const errorMiddleware: ErrorRequestHandler = (
  error: unknown,
  _request,
  response,
  _next,
) => {
  const knownError = error instanceof ApiError;
  if (!knownError && env.nodeEnv !== "test") console.error(error);
  const payload: ApiErrorResponse = {
    success: false,
    error: {
      code: knownError ? error.code : "INTERNAL_SERVER_ERROR",
      message: knownError ? error.message : "An unexpected error occurred.",
    },
  };
  response.status(knownError ? error.statusCode : 500).json(payload);
};
