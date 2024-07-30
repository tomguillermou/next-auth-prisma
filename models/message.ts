import { Schema, model, models } from "mongoose";

export type Message = {
  _id: string;
  content: string;
  userId: string;
  createdAt: Date;
};

const messageSchema = new Schema<Message>(
  {
    content: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

export const messageModel = model<Message>("Message") || model<Message>("Message", messageSchema);
