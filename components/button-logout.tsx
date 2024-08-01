import { FiLogOut } from "react-icons/fi";

import { signOut } from "@/app/auth";

async function logout() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default function ButtonLogout() {
  return (
    <form action={logout}>
      <button className="btn btn-ghost text-lg" type="submit">
        <FiLogOut />
        Disconnect
      </button>
    </form>
  );
}
