import Link from "next/link";
import { FiHome, FiLogIn, FiUser } from "react-icons/fi";

import { auth } from "@/app/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="navbar justify-between max-w-5xl mx-auto">
      <Link href="/" className="btn btn-ghost text-lg">
        <FiHome />
        Home
      </Link>

      {session?.user ? (
        <Link href="/profile" className="btn btn-ghost text-lg">
          <FiUser />
          {session.user.name}
        </Link>
      ) : (
        <Link href="/login" className="btn text-lg">
          <FiLogIn />
          Login
        </Link>
      )}
    </header>
  );
}
