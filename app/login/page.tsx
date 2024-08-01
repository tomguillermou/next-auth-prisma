import { redirect } from "next/navigation";

import ButtonLoginGoogle from "@/components/button-login-google";

import { auth } from "../auth";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="hero mt-12">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Login now</h1>

          <ButtonLoginGoogle />
        </div>
      </div>
    </div>
  );
}
