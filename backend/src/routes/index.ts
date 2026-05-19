import { Router } from "express";
import { getDashboard } from "../controllers/dashboard.controller";
import { getIntegrations } from "../controllers/integrations.controller";
import { getLogs } from "../controllers/logs.controller";
import { getWorkflows } from "../controllers/workflows.controller";

export const routes = Router();

routes.get("/dashboard", getDashboard);
routes.get("/integrations", getIntegrations);
routes.get("/workflows", getWorkflows);
routes.get("/logs", getLogs);
