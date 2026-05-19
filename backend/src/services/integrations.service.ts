import { prisma } from "../lib/prisma";

export async function listIntegrations() {
  return prisma.integration.findMany({
    orderBy: { createdAt: "desc" },
  });
}
