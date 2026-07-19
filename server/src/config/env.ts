import "dotenv/config";

type NodeEnvironment = "development" | "production" | "test";

function getNodeEnvironment(value: string | undefined): NodeEnvironment {
  if (value === "production" || value === "test") return value;
  return "development";
}

function getPort(value: string | undefined): number {
  const port = Number(value ?? 4000);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error("PORT must be an integer between 1 and 65535.");
  }
  return port;
}

export const env = Object.freeze({
  clientOrigin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173",
  databaseUri: process.env.MONGODB_URI,
  nodeEnv: getNodeEnvironment(process.env.NODE_ENV),
  port: getPort(process.env.PORT),
});
