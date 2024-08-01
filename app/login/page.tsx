import { redirect } from "next/navigation";

import ButtonLoginGoogle from "@/components/button-login-google";

import { auth } from "../auth";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="hero max-w-lg mx-auto mt-12">
      <div className="hero-content flex-col p-8 gap-8">
        <h1 className="text-5xl font-bold">Login</h1>

        <ButtonLoginGoogle />
      </div>
    </main>
  );
}
