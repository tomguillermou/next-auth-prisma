/* eslint-disable @next/next/no-img-element */
import { redirect } from "next/navigation";

import ButtonLogout from "@/components/button-logout";

import { auth } from "../auth";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="card max-w-sm mx-auto shadow-xl">
      <div className="card-body items-center text-center">
        {session.user.image && (
          <img
            src={session.user.image}
            alt="User avatar"
            height={48}
            width={48}
            className="rounded-full"
          />
        )}
        <h2 className="card-title">{session.user.name}</h2>
        <p>{session.user.email}</p>

        <div className="card-actions mt-8">
          <ButtonLogout />
        </div>
      </div>
    </main>
  );
}
