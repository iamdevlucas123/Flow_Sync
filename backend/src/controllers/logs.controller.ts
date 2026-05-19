import type { Request, Response } from "express";
import { listLogs } from "../services/logs.service";

export async function getLogs(_request: Request, response: Response) {
  const logs = await listLogs();

  response.json(logs);
}
