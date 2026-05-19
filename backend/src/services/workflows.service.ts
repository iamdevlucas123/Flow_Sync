import { prisma } from "../lib/prisma";

export async function listWorkflows() {
  return prisma.workflow.findMany({
    orderBy: { createdAt: "desc" },
  });
}
