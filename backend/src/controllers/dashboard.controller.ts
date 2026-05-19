import type { Request, Response } from "express";
import { getDashboardData } from "../services/dashboard.service";

export async function getDashboard(_request: Request, response: Response) {
  const dashboard = await getDashboardData();

  response.json(dashboard);
}
