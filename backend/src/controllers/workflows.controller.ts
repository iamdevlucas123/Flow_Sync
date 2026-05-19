import type { Request, Response } from "express";
import { listWorkflows } from "../services/workflows.service";

export async function getWorkflows(_request: Request, response: Response) {
  const workflows = await listWorkflows();

  response.json(workflows);
}
