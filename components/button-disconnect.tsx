import { FiLogOut } from "react-icons/fi";

import { signOut } from "@/app/auth";

async function signOutAction() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default function ButtonDisonnect() {
  return (
    <form action={signOutAction}>
      <button className="btn" type="submit">
        <FiLogOut size={20} />
        Disconnect
      </button>
    </form>
  );
}
