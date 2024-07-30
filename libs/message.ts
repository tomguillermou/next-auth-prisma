import { prisma } from "./prisma";

export async function publishMessage(params: { content: string; userId: string }): Promise<void> {
  await prisma.message.create({
    data: {
      content: params.content,
      userId: params.userId,
    },
  });
}

export function listMessages() {
  return prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
}
