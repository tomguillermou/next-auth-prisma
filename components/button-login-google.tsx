import { FcGoogle } from "react-icons/fc";

import { signIn } from "@/app/auth";

async function loginGoogle() {
  "use server";
  await signIn("google", { redirectTo: "/" });
}

export default function ButtonLoginGoogle() {
  return (
    <form action={loginGoogle}>
      <button className="btn text-lg" type="submit">
        <FcGoogle />
        Login with Google
      </button>
    </form>
  );
}
