import { auth } from "@/app/auth";
import { publishMessage } from "@/libs/message";

export default async function MessageForm() {
  async function publishMessageAction(formData: FormData) {
    "use server";

    const session = await auth();

    if (!session?.user?.id) return;

    const content = formData.get("content");

    if (typeof content !== "string" || !content) return;

    await publishMessage({
      content,
      userId: session.user.id,
    });
  }

  return (
    <form className="flex gap-3" action={publishMessageAction}>
      <input type="text" placeholder="Type here" name="content" className="input input-bordered w-full max-w-xs" />
      <button className="btn btn-primary" type="submit">
        Publish
      </button>
    </form>
  );
}
