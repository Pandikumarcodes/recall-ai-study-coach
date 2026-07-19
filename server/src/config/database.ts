import mongoose from "mongoose";
import { env } from "./env";

export async function connectDatabase(): Promise<void> {
  if (!env.databaseUri) return;
  await mongoose.connect(env.databaseUri);
}
