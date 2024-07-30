import { listMessages } from "@/libs/message";

export default async function MessageList() {
  const messages = await listMessages();

  return messages.map((message) => (
    <div key={}>
      <p>{message.content}</p>
    </div>
  ));
}
