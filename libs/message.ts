import { Message, messageModel } from "@/models/message";

export async function publishMessage(params: { content: string; userId: string }): Promise<void> {
  console.log("🚀  params:", params);
  await messageModel.create({
    content: params.content,
    userId: params.userId,
    createdAt: Date.now(),
  });
}

export function listMessages(): Promise<Message[]> {
  return messageModel.find().lean().exec();
}
