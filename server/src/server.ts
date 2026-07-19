import { app } from "./app";
import { env } from "./config/env";

const server = app.listen(env.port, () => {
  if (env.nodeEnv !== "test")
    console.info(`Recall API listening on port ${env.port}.`);
});

function shutdown(signal: NodeJS.Signals): void {
  server.close((error) => {
    if (error) {
      console.error(`Failed to shut down after ${signal}.`, error);
      process.exitCode = 1;
    }
  });
}
process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));
