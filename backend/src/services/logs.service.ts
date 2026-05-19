import { prisma } from "../lib/prisma";

export async function listLogs() {
  return prisma.logEntry.findMany({
    orderBy: { createdAt: "desc" },
  });
}
