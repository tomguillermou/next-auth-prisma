import { FcGoogle } from "react-icons/fc";

import { signIn } from "@/app/auth";

export default function ButtonGoogleConnect() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="btn text-lg" type="submit">
        <FcGoogle />
        Signin with Google
      </button>
    </form>
  );
}
