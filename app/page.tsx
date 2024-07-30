import MessageForm from "@/components/message-form";
import MessageList from "@/components/message-list";

export default function Home() {
  return (
    <section className="hero mt-12">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Messages</h1>
          <p className="py-6">Publish your message and share it with the world</p>
          <MessageForm />

          <div className="divider"></div>

          <MessageList />
        </div>
      </div>
    </section>
  );
}
