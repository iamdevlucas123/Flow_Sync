import { prisma } from "../lib/prisma";

export async function getDashboardData() {
  const [integrationsCount, activeIntegrationsCount, workflowsCount, logsCount, recentLogs] =
    await Promise.all([
      prisma.integration.count(),
      prisma.integration.count({ where: { status: "active" } }),
      prisma.workflow.count(),
      prisma.logEntry.count(),
      prisma.logEntry.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  return {
    metrics: {
      integrations: integrationsCount,
      activeIntegrations: activeIntegrationsCount,
      workflows: workflowsCount,
      logs: logsCount,
    },
    recentLogs,
  };
}
