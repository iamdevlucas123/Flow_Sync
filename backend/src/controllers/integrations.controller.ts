import type { Request, Response } from "express";
import { listIntegrations } from "../services/integrations.service";

export async function getIntegrations(_request: Request, response: Response) {
  const integrations = await listIntegrations();

  response.json(integrations);
}
