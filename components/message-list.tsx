import Image from "next/image";

import { listMessages } from "@/libs/message";

export default async function MessageList() {
  const messages = await listMessages();

  return (
    <section className="flex flex-col gap-3">
      {messages.map((message) => (
        <div key={message.id} className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message.user.image!} alt="User avatar" />
            </div>
          </div>
          <div className="chat-header flex gap-2 items-center">
            {message.user.name}
            <time className="text-xs opacity-50">{message.createdAt.toLocaleDateString()}</time>
          </div>
          <div className="chat-bubble">{message.content}</div>
        </div>
      ))}
    </section>
  );
}
