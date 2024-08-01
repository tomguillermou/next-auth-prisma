import MessageForm from "@/components/message-form";
import MessageList from "@/components/message-list";

import { auth } from "./auth";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <section className="hero mt-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Messages</h1>
            <p className="py-6">Publish your message and share it with the world</p>
            {!!session?.user && <MessageForm />}

            <div className="divider"></div>

            <MessageList />
          </div>
        </div>
      </section>
    </main>
  );
}
